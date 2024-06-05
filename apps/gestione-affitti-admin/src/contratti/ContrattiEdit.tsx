import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContrattiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Affitto" source="affitto" />
        <TextInput label="AltreSpese" source="altreSpese" />
        <TextInput
          label="CondizioniSpecialiClausole"
          multiline
          source="condizioniSpecialiClausole"
        />
        <DateTimeInput label="DataPagamento" source="dataPagamento" />
        <NumberInput label="DepositoCauzione" source="depositoCauzione" />
        <NumberInput
          step={1}
          label="DurataContratto"
          source="durataContratto"
        />
        <DateTimeInput label="FineLocazione" source="fineLocazione" />
        <TextInput label="Identificativo" source="identificativo" />
        <DateTimeInput label="InizioLocazione" source="inizioLocazione" />
        <TextInput label="Inquilini" source="inquilini" />
        <TextInput label="NoteVarie" multiline source="noteVarie" />
        <TextInput
          label="NumeroRegistrazioneAgenziaEntrate"
          source="numeroRegistrazioneAgenziaEntrate"
        />
        <TextInput label="Pagamento" source="pagamento" />
        <TextInput label="Proprietà" source="propriet" />
        <NumberInput label="Spese" source="spese" />
        <TextInput label="Tipologia" source="tipologia" />
      </SimpleForm>
    </Edit>
  );
};
