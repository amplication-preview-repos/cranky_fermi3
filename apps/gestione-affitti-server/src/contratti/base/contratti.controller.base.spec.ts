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
import { ContrattiController } from "../contratti.controller";
import { ContrattiService } from "../contratti.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  affitto: 42.42,
  altreSpese: "exampleAltreSpese",
  condizioniSpecialiClausole: "exampleCondizioniSpecialiClausole",
  createdAt: new Date(),
  dataPagamento: new Date(),
  depositoCauzione: 42.42,
  durataContratto: 42,
  fineLocazione: new Date(),
  id: "exampleId",
  identificativo: "exampleIdentificativo",
  inizioLocazione: new Date(),
  inquilini: "exampleInquilini",
  noteVarie: "exampleNoteVarie",
  numeroRegistrazioneAgenziaEntrate: "exampleNumeroRegistrazioneAgenziaEntrate",
  pagamento: "examplePagamento",
  propriet: "examplePropriet",
  spese: 42.42,
  tipologia: "exampleTipologia",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  affitto: 42.42,
  altreSpese: "exampleAltreSpese",
  condizioniSpecialiClausole: "exampleCondizioniSpecialiClausole",
  createdAt: new Date(),
  dataPagamento: new Date(),
  depositoCauzione: 42.42,
  durataContratto: 42,
  fineLocazione: new Date(),
  id: "exampleId",
  identificativo: "exampleIdentificativo",
  inizioLocazione: new Date(),
  inquilini: "exampleInquilini",
  noteVarie: "exampleNoteVarie",
  numeroRegistrazioneAgenziaEntrate: "exampleNumeroRegistrazioneAgenziaEntrate",
  pagamento: "examplePagamento",
  propriet: "examplePropriet",
  spese: 42.42,
  tipologia: "exampleTipologia",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    affitto: 42.42,
    altreSpese: "exampleAltreSpese",
    condizioniSpecialiClausole: "exampleCondizioniSpecialiClausole",
    createdAt: new Date(),
    dataPagamento: new Date(),
    depositoCauzione: 42.42,
    durataContratto: 42,
    fineLocazione: new Date(),
    id: "exampleId",
    identificativo: "exampleIdentificativo",
    inizioLocazione: new Date(),
    inquilini: "exampleInquilini",
    noteVarie: "exampleNoteVarie",
    numeroRegistrazioneAgenziaEntrate:
      "exampleNumeroRegistrazioneAgenziaEntrate",
    pagamento: "examplePagamento",
    propriet: "examplePropriet",
    spese: 42.42,
    tipologia: "exampleTipologia",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  affitto: 42.42,
  altreSpese: "exampleAltreSpese",
  condizioniSpecialiClausole: "exampleCondizioniSpecialiClausole",
  createdAt: new Date(),
  dataPagamento: new Date(),
  depositoCauzione: 42.42,
  durataContratto: 42,
  fineLocazione: new Date(),
  id: "exampleId",
  identificativo: "exampleIdentificativo",
  inizioLocazione: new Date(),
  inquilini: "exampleInquilini",
  noteVarie: "exampleNoteVarie",
  numeroRegistrazioneAgenziaEntrate: "exampleNumeroRegistrazioneAgenziaEntrate",
  pagamento: "examplePagamento",
  propriet: "examplePropriet",
  spese: 42.42,
  tipologia: "exampleTipologia",
  updatedAt: new Date(),
};

const service = {
  createContratti() {
    return CREATE_RESULT;
  },
  contrattis: () => FIND_MANY_RESULT,
  contratti: ({ where }: { where: { id: string } }) => {
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

describe("Contratti", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContrattiService,
          useValue: service,
        },
      ],
      controllers: [ContrattiController],
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

  test("POST /contrattis", async () => {
    await request(app.getHttpServer())
      .post("/contrattis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataPagamento: CREATE_RESULT.dataPagamento.toISOString(),
        fineLocazione: CREATE_RESULT.fineLocazione.toISOString(),
        inizioLocazione: CREATE_RESULT.inizioLocazione.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contrattis", async () => {
    await request(app.getHttpServer())
      .get("/contrattis")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dataPagamento: FIND_MANY_RESULT[0].dataPagamento.toISOString(),
          fineLocazione: FIND_MANY_RESULT[0].fineLocazione.toISOString(),
          inizioLocazione: FIND_MANY_RESULT[0].inizioLocazione.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contrattis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contrattis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contrattis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contrattis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dataPagamento: FIND_ONE_RESULT.dataPagamento.toISOString(),
        fineLocazione: FIND_ONE_RESULT.fineLocazione.toISOString(),
        inizioLocazione: FIND_ONE_RESULT.inizioLocazione.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /contrattis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contrattis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataPagamento: CREATE_RESULT.dataPagamento.toISOString(),
        fineLocazione: CREATE_RESULT.fineLocazione.toISOString(),
        inizioLocazione: CREATE_RESULT.inizioLocazione.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/contrattis")
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
