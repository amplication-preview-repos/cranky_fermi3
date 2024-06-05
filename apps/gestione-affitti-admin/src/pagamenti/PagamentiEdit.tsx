import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const PagamentiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
