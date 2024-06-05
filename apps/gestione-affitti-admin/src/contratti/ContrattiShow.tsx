import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ContrattiShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
