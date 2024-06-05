import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ImmobiliList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Immobilis"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Canone" source="canone" />
        <TextField label="CAP" source="cap" />
        <TextField label="CaparraIniziale" source="caparraIniziale" />
        <TextField label="CategoriaCatasto" source="categoriaCatasto" />
        <TextField label="Città" source="citt" />
        <TextField label="Classe" source="classe" />
        <TextField label="Contratto" source="contratto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Descrizione" source="descrizione" />
        <TextField label="Documenti" source="documenti" />
        <TextField label="FoglioCatastale" source="foglioCatastale" />
        <TextField label="Foto" source="foto" />
        <TextField label="ID" source="id" />
        <TextField label="IMU" source="imu" />
        <TextField label="Indirizzo" source="indirizzo" />
        <TextField label="Mq2" source="mq2" />
        <TextField label="Note" source="note" />
        <TextField label="Numero" source="numero" />
        <TextField label="NumeroLocali" source="numeroLocali" />
        <TextField
          label="NumeroLocaliAggiuntivi"
          source="numeroLocaliAggiuntivi"
        />
        <TextField label="Paese" source="paese" />
        <TextField label="Particella" source="particella" />
        <TextField label="Partita" source="partita" />
        <TextField label="Piani" source="piani" />
        <TextField label="Regione" source="regione" />
        <TextField label="RenditaCatastale" source="renditaCatastale" />
        <TextField label="RiferimentiCatastali" source="riferimentiCatastali" />
        <TextField label="SezioneUrbana" source="sezioneUrbana" />
        <TextField label="Spese" source="spese" />
        <TextField label="Subalterno" source="subalterno" />
        <TextField label="TipoLocazione" source="tipoLocazione" />
        <TextField label="TipologiaProprietà" source="tipologiaPropriet" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ZonaCensuaria" source="zonaCensuaria" />
      </Datagrid>
    </List>
  );
};
