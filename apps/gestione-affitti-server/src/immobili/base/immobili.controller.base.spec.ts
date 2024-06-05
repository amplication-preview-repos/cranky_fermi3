import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ImmobiliController } from "../immobili.controller";
import { ImmobiliService } from "../immobili.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  canone: 42.42,
  cap: "exampleCap",
  caparraIniziale: 42.42,
  categoriaCatasto: "exampleCategoriaCatasto",
  citt: "exampleCitt",
  classe: "exampleClasse",
  createdAt: new Date(),
  descrizione: "exampleDescrizione",
  foglioCatastale: "exampleFoglioCatastale",
  id: "exampleId",
  imu: 42.42,
  indirizzo: "exampleIndirizzo",
  mq2: 42,
  note: "exampleNote",
  numero: "exampleNumero",
  numeroLocali: 42,
  numeroLocaliAggiuntivi: 42,
  paese: "examplePaese",
  particella: "exampleParticella",
  partita: "examplePartita",
  piani: 42,
  regione: "exampleRegione",
  renditaCatastale: 42.42,
  riferimentiCatastali: "exampleRiferimentiCatastali",
  sezioneUrbana: "exampleSezioneUrbana",
  spese: 42.42,
  subalterno: "exampleSubalterno",
  tipoLocazione: "exampleTipoLocazione",
  tipologiaPropriet: "exampleTipologiaPropriet",
  updatedAt: new Date(),
  zonaCensuaria: "exampleZonaCensuaria",
};
const CREATE_RESULT = {
  canone: 42.42,
  cap: "exampleCap",
  caparraIniziale: 42.42,
  categoriaCatasto: "exampleCategoriaCatasto",
  citt: "exampleCitt",
  classe: "exampleClasse",
  createdAt: new Date(),
  descrizione: "exampleDescrizione",
  foglioCatastale: "exampleFoglioCatastale",
  id: "exampleId",
  imu: 42.42,
  indirizzo: "exampleIndirizzo",
  mq2: 42,
  note: "exampleNote",
  numero: "exampleNumero",
  numeroLocali: 42,
  numeroLocaliAggiuntivi: 42,
  paese: "examplePaese",
  particella: "exampleParticella",
  partita: "examplePartita",
  piani: 42,
  regione: "exampleRegione",
  renditaCatastale: 42.42,
  riferimentiCatastali: "exampleRiferimentiCatastali",
  sezioneUrbana: "exampleSezioneUrbana",
  spese: 42.42,
  subalterno: "exampleSubalterno",
  tipoLocazione: "exampleTipoLocazione",
  tipologiaPropriet: "exampleTipologiaPropriet",
  updatedAt: new Date(),
  zonaCensuaria: "exampleZonaCensuaria",
};
const FIND_MANY_RESULT = [
  {
    canone: 42.42,
    cap: "exampleCap",
    caparraIniziale: 42.42,
    categoriaCatasto: "exampleCategoriaCatasto",
    citt: "exampleCitt",
    classe: "exampleClasse",
    createdAt: new Date(),
    descrizione: "exampleDescrizione",
    foglioCatastale: "exampleFoglioCatastale",
    id: "exampleId",
    imu: 42.42,
    indirizzo: "exampleIndirizzo",
    mq2: 42,
    note: "exampleNote",
    numero: "exampleNumero",
    numeroLocali: 42,
    numeroLocaliAggiuntivi: 42,
    paese: "examplePaese",
    particella: "exampleParticella",
    partita: "examplePartita",
    piani: 42,
    regione: "exampleRegione",
    renditaCatastale: 42.42,
    riferimentiCatastali: "exampleRiferimentiCatastali",
    sezioneUrbana: "exampleSezioneUrbana",
    spese: 42.42,
    subalterno: "exampleSubalterno",
    tipoLocazione: "exampleTipoLocazione",
    tipologiaPropriet: "exampleTipologiaPropriet",
    updatedAt: new Date(),
    zonaCensuaria: "exampleZonaCensuaria",
  },
];
const FIND_ONE_RESULT = {
  canone: 42.42,
  cap: "exampleCap",
  caparraIniziale: 42.42,
  categoriaCatasto: "exampleCategoriaCatasto",
  citt: "exampleCitt",
  classe: "exampleClasse",
  createdAt: new Date(),
  descrizione: "exampleDescrizione",
  foglioCatastale: "exampleFoglioCatastale",
  id: "exampleId",
  imu: 42.42,
  indirizzo: "exampleIndirizzo",
  mq2: 42,
  note: "exampleNote",
  numero: "exampleNumero",
  numeroLocali: 42,
  numeroLocaliAggiuntivi: 42,
  paese: "examplePaese",
  particella: "exampleParticella",
  partita: "examplePartita",
  piani: 42,
  regione: "exampleRegione",
  renditaCatastale: 42.42,
  riferimentiCatastali: "exampleRiferimentiCatastali",
  sezioneUrbana: "exampleSezioneUrbana",
  spese: 42.42,
  subalterno: "exampleSubalterno",
  tipoLocazione: "exampleTipoLocazione",
  tipologiaPropriet: "exampleTipologiaPropriet",
  updatedAt: new Date(),
  zonaCensuaria: "exampleZonaCensuaria",
};

const service = {
  createImmobili() {
    return CREATE_RESULT;
  },
  immobilis: () => FIND_MANY_RESULT,
  immobili: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Immobili", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ImmobiliService,
          useValue: service,
        },
      ],
      controllers: [ImmobiliController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /immobilis", async () => {
    await request(app.getHttpServer())
      .post("/immobilis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /immobilis", async () => {
    await request(app.getHttpServer())
      .get("/immobilis")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /immobilis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/immobilis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /immobilis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/immobilis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /immobilis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/immobilis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/immobilis")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
