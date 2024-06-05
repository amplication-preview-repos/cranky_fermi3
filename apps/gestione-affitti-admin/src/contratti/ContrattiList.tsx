import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContrattiList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contrattis"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Affitto" source="affitto" />
        <TextField label="AltreSpese" source="altreSpese" />
        <TextField
          label="CondizioniSpecialiClausole"
          source="condizioniSpecialiClausole"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataPagamento" source="dataPagamento" />
        <TextField label="DepositoCauzione" source="depositoCauzione" />
        <TextField label="DurataContratto" source="durataContratto" />
        <TextField label="FineLocazione" source="fineLocazione" />
        <TextField label="ID" source="id" />
        <TextField label="Identificativo" source="identificativo" />
        <TextField label="InizioLocazione" source="inizioLocazione" />
        <TextField label="Inquilini" source="inquilini" />
        <TextField label="NoteVarie" source="noteVarie" />
        <TextField
          label="NumeroRegistrazioneAgenziaEntrate"
          source="numeroRegistrazioneAgenziaEntrate"
        />
        <TextField label="Pagamento" source="pagamento" />
        <TextField label="Proprietà" source="propriet" />
        <TextField label="Spese" source="spese" />
        <TextField label="Tipologia" source="tipologia" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
