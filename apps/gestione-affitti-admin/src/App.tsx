import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ContrattiList } from "./contratti/ContrattiList";
import { ContrattiCreate } from "./contratti/ContrattiCreate";
import { ContrattiEdit } from "./contratti/ContrattiEdit";
import { ContrattiShow } from "./contratti/ContrattiShow";
import { ImmobiliList } from "./immobili/ImmobiliList";
import { ImmobiliCreate } from "./immobili/ImmobiliCreate";
import { ImmobiliEdit } from "./immobili/ImmobiliEdit";
import { ImmobiliShow } from "./immobili/ImmobiliShow";
import { PagamentiList } from "./pagamenti/PagamentiList";
import { PagamentiCreate } from "./pagamenti/PagamentiCreate";
import { PagamentiEdit } from "./pagamenti/PagamentiEdit";
import { PagamentiShow } from "./pagamenti/PagamentiShow";
import { UtentiList } from "./utenti/UtentiList";
import { UtentiCreate } from "./utenti/UtentiCreate";
import { UtentiEdit } from "./utenti/UtentiEdit";
import { UtentiShow } from "./utenti/UtentiShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GestioneAffitti"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Contratti"
          list={ContrattiList}
          edit={ContrattiEdit}
          create={ContrattiCreate}
          show={ContrattiShow}
        />
        <Resource
          name="Immobili"
          list={ImmobiliList}
          edit={ImmobiliEdit}
          create={ImmobiliCreate}
          show={ImmobiliShow}
        />
        <Resource
          name="Pagamenti"
          list={PagamentiList}
          edit={PagamentiEdit}
          create={PagamentiCreate}
          show={PagamentiShow}
        />
        <Resource
          name="Utenti"
          list={UtentiList}
          edit={UtentiEdit}
          create={UtentiCreate}
          show={UtentiShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
