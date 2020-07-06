import React from "react";
import {
  Datagrid,
  List,
  TextField,
  EditButton,
  Filter,
  TextInput,
  CardActions,
  RefreshButton
} from "react-admin";

const PlayerFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Buscar" source="user.email" alwaysOn />
  </Filter>
);

const CustomActions = () => <CardActions>
                              <RefreshButton />
                            </CardActions>

const PlayerList = props => {
  return (
    <List bulkActionButtons={false} {...props} filters={<PlayerFilter />} actions={<CustomActions />} >
      <Datagrid rowClick="show">
        <TextField source="entity_id" label="ID" />
        <TextField source="user.nickname" label="Nickname" />
        <TextField source="user.email" label="E-mail" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default PlayerList;