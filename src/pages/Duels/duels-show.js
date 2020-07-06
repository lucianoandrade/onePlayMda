import React from "react";
import {
  BooleanField,
  TextField,
  NumberField,
  Show,
  TabbedShowLayout,
  DateField,
  Tab
} from "react-admin";

const DuelsShow = (props) => {
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <Show {...props} title="Usuário" actions={<div />}>
          <TabbedShowLayout>
            <Tab label="Dados do Duelos">
              <TextField source="entity_id" label="entity_id do Duelo" />
              <TextField source="duel_type" label="Tipo do Duelo" />
              <TextField source="star_type" label="Tipo de Star" />
              <DateField source="creation_datetime" label="Data e hora da criação" showTime />
              <NumberField source="bet_size" label="Aposta em Stars" />
              <NumberField source="maximum_time" label="Tempo máximo (em segundos)" />
              <NumberField source="minimum_time" label="Tempo mínimo (em segundos)" />
              <TextField source="member_type" label="Tipo de membro" />
              <TextField source="participants" label="Participantes" />
              <NumberField source="response_time" label="Tempo de resposta" />
              <NumberField source="result_time" label="Tempo de resultado" />
              <TextField source="status" label="status" />
              <DateField source="time_start" label="hora de início" showTime />
              <DateField source="time_cancel" label="Hora de cancelamento" showTime/>
              <DateField source="time_finish" label="Hora de Termino" showTime />
              <DateField source="time_send_invitation" label="Hora de envio do convite" showTime/>
              <NumberField source="total_reward" label="Recompensa total" />
              <TextField source="winner" label="Vencedor" />
            </Tab>
            <Tab label="Participantes">
              <TextField source="challenger" label="ID do desafiante" />
              <TextField source="challenged" label="ID do desafiado" />
              
              <BooleanField source="challenged_accept" label="Aceite do desafiado"/>

              <BooleanField source="challenger_confirmation" label="confirmação do desafiante" />
              <BooleanField source="challenged_confirmation" label="confirmação do desafiado" />

              <TextField source="challenger_duel_result.result" label="Resultado - Desafiante" />
              <TextField source="challenger_duel_result.result_image" label="Imagem do Resultado - Desafiante" />
              <TextField source="challenger_duel_result.submission_datetime" label="Data e hora do envio - Desafiante" />

              <TextField source="challenged_duel_result.result" label="Resultado - Desafiado" />
              <TextField source="challenged_duel_result.result_image" label="Imagem do Resultado - Desafiado" />
              <TextField source="challenged_duel_result.submission_datetime" label="Data e hora do envio - Desafiado" />

              <TextField source="challenger_last_duel" label="Último duelo - Desafiante" />
              <TextField source="challenged_last_duel" label="Último duelo - Desafiado" />
            </Tab>
            <Tab label="Console">
              <TextField source="console.entity_id" label="entity_id do console" />
              <TextField source="console.name" label="Nome do console" />
            </Tab>
            <Tab label="Game">
              <TextField source="game.entity_id" label="entity_id do game" />
              <TextField source="game.name" label="Nome do game" />
              <NumberField source="game.points" label="Pontos" />
              <NumberField source="game.victories" label="Vitórias" />
            </Tab>
          </TabbedShowLayout>
        </Show>
      </div>
    </>
  );
};

export default DuelsShow;
