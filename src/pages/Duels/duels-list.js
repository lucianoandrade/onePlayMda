import React from "react";
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
  CardActions,
  DateField,
  RefreshButton
} from "react-admin";

const DuelsFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Buscar" source="duel_type" alwaysOn />
  </Filter>
);

const CustomActions = () => <CardActions>
                              <RefreshButton />
                            </CardActions>

const DuelsList = props => {
  return (
    <List bulkActionButtons={false} {...props} filters={<DuelsFilter />} actions={<CustomActions />} >
      <Datagrid rowClick="show">
        <DateField source="creation_datetime" label="Data e hora da criação" showTime/>
        <TextField source="challenger" label="ID do Desafiante" />
        <TextField source="challenged" label="ID do Desafiado" />
        <TextField source="status" label="Status do Duelo" />
        <TextField source="duel_type" label="Tipo do Duelo" />
        <TextField source="star_type" label="TIpo de Aposta" />
        <TextField source="game.entity_id" label="Game ID" />
      </Datagrid>
    </List>
  );
};

export default DuelsList;