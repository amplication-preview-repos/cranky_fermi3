import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UtentiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CodiceFiscale" source="codiceFiscale" />
        <TextInput label="Cognome" source="cognome" />
        <DateTimeInput label="DataNascita" source="dataNascita" />
        <div />
        <TextInput label="DocumentoIdentità" source="documentoIdentit" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="LuogoNascita" source="luogoNascita" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="Telefono" source="telefono" />
      </SimpleForm>
    </Create>
  );
};
