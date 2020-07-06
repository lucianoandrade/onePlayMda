import React from "react";
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
  CardActions,
  RefreshButton,
  CreateButton,
  DeleteButton,
  EditButton
} from "react-admin";
 
const UserFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Buscar" source="name" alwaysOn />
  </Filter>
);

const CustomActions = (props) => {
  console.log(props)
  return <CardActions>
                                <RefreshButton />
                                <CreateButton  basePath={props.basePath}/>
                            </CardActions>
}

const PlatformList = props => {
  return (
    <List bulkActionButtons={false} {...props} filters={<UserFilter />} actions={<CustomActions  {...props}/>} >
      <Datagrid rowClick="edit">
        <TextField source="name" label="consoles" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default PlatformList;