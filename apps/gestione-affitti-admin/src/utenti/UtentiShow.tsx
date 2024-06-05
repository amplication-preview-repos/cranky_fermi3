import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UtentiShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CodiceFiscale" source="codiceFiscale" />
        <TextField label="Cognome" source="cognome" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataNascita" source="dataNascita" />
        <TextField label="Documenti" source="documenti" />
        <TextField label="DocumentoIdentità" source="documentoIdentit" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="LuogoNascita" source="luogoNascita" />
        <TextField label="Nome" source="nome" />
        <TextField label="Note" source="note" />
        <TextField label="Telefono" source="telefono" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
