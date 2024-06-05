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
import { UtentiController } from "../utenti.controller";
import { UtentiService } from "../utenti.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  codiceFiscale: "exampleCodiceFiscale",
  cognome: "exampleCognome",
  createdAt: new Date(),
  dataNascita: new Date(),
  documentoIdentit: "exampleDocumentoIdentit",
  email: "exampleEmail",
  id: "exampleId",
  luogoNascita: "exampleLuogoNascita",
  nome: "exampleNome",
  note: "exampleNote",
  telefono: "exampleTelefono",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  codiceFiscale: "exampleCodiceFiscale",
  cognome: "exampleCognome",
  createdAt: new Date(),
  dataNascita: new Date(),
  documentoIdentit: "exampleDocumentoIdentit",
  email: "exampleEmail",
  id: "exampleId",
  luogoNascita: "exampleLuogoNascita",
  nome: "exampleNome",
  note: "exampleNote",
  telefono: "exampleTelefono",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    codiceFiscale: "exampleCodiceFiscale",
    cognome: "exampleCognome",
    createdAt: new Date(),
    dataNascita: new Date(),
    documentoIdentit: "exampleDocumentoIdentit",
    email: "exampleEmail",
    id: "exampleId",
    luogoNascita: "exampleLuogoNascita",
    nome: "exampleNome",
    note: "exampleNote",
    telefono: "exampleTelefono",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  codiceFiscale: "exampleCodiceFiscale",
  cognome: "exampleCognome",
  createdAt: new Date(),
  dataNascita: new Date(),
  documentoIdentit: "exampleDocumentoIdentit",
  email: "exampleEmail",
  id: "exampleId",
  luogoNascita: "exampleLuogoNascita",
  nome: "exampleNome",
  note: "exampleNote",
  telefono: "exampleTelefono",
  updatedAt: new Date(),
};

const service = {
  createUtenti() {
    return CREATE_RESULT;
  },
  utentis: () => FIND_MANY_RESULT,
  utenti: ({ where }: { where: { id: string } }) => {
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

describe("Utenti", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UtentiService,
          useValue: service,
        },
      ],
      controllers: [UtentiController],
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

  test("POST /utentis", async () => {
    await request(app.getHttpServer())
      .post("/utentis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataNascita: CREATE_RESULT.dataNascita.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /utentis", async () => {
    await request(app.getHttpServer())
      .get("/utentis")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dataNascita: FIND_MANY_RESULT[0].dataNascita.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /utentis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/utentis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /utentis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/utentis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dataNascita: FIND_ONE_RESULT.dataNascita.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /utentis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/utentis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataNascita: CREATE_RESULT.dataNascita.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/utentis")
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
