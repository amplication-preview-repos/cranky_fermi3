import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PagamentiList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pagamentis"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
