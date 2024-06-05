import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const PagamentiShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AggiungiEntrata" source="aggiungiEntrata" />
        <TextField label="AggiungiSpesa" source="aggiungiSpesa" />
        <TextField label="Avere" source="avere" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dare" source="dare" />
        <TextField label="ID" source="id" />
        <BooleanField label="NonPagati" source="nonPagati" />
        <BooleanField label="Pagati" source="pagati" />
        <TextField label="Riepilogo" source="riepilogo" />
        <TextField label="Rimanenza" source="rimanenza" />
        <TextField label="StoricoPagamenti" source="storicoPagamenti" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
