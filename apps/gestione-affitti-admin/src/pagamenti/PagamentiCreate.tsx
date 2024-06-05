import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const PagamentiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="AggiungiEntrata" source="aggiungiEntrata" />
        <NumberInput label="AggiungiSpesa" source="aggiungiSpesa" />
        <NumberInput label="Avere" source="avere" />
        <NumberInput label="Dare" source="dare" />
        <BooleanInput label="NonPagati" source="nonPagati" />
        <BooleanInput label="Pagati" source="pagati" />
        <TextInput label="Riepilogo" multiline source="riepilogo" />
        <NumberInput label="Rimanenza" source="rimanenza" />
        <TextInput
          label="StoricoPagamenti"
          multiline
          source="storicoPagamenti"
        />
      </SimpleForm>
    </Create>
  );
};
