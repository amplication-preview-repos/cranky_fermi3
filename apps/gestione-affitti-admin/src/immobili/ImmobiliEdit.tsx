import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ImmobiliEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Canone" source="canone" />
        <TextInput label="CAP" source="cap" />
        <NumberInput label="CaparraIniziale" source="caparraIniziale" />
        <TextInput label="CategoriaCatasto" source="categoriaCatasto" />
        <TextInput label="Città" source="citt" />
        <TextInput label="Classe" source="classe" />
        <div />
        <TextInput label="Descrizione" multiline source="descrizione" />
        <div />
        <TextInput label="FoglioCatastale" source="foglioCatastale" />
        <div />
        <NumberInput label="IMU" source="imu" />
        <TextInput label="Indirizzo" source="indirizzo" />
        <NumberInput step={1} label="Mq2" source="mq2" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="Numero" source="numero" />
        <NumberInput step={1} label="NumeroLocali" source="numeroLocali" />
        <NumberInput
          step={1}
          label="NumeroLocaliAggiuntivi"
          source="numeroLocaliAggiuntivi"
        />
        <TextInput label="Paese" source="paese" />
        <TextInput label="Particella" source="particella" />
        <TextInput label="Partita" source="partita" />
        <NumberInput step={1} label="Piani" source="piani" />
        <TextInput label="Regione" source="regione" />
        <NumberInput label="RenditaCatastale" source="renditaCatastale" />
        <TextInput label="RiferimentiCatastali" source="riferimentiCatastali" />
        <TextInput label="SezioneUrbana" source="sezioneUrbana" />
        <NumberInput label="Spese" source="spese" />
        <TextInput label="Subalterno" source="subalterno" />
        <TextInput label="TipoLocazione" source="tipoLocazione" />
        <TextInput label="TipologiaProprietà" source="tipologiaPropriet" />
        <TextInput label="ZonaCensuaria" source="zonaCensuaria" />
      </SimpleForm>
    </Edit>
  );
};
