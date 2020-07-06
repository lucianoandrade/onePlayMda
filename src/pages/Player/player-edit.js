import React from "react";
import {
  Edit,
  BooleanInput,
  TextField,
  SimpleForm,
  EmailField
} from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";

const PlayerEdit = props => {
  return (
    <Edit title="Usuário" {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <BooleanInput source="is_admin" label="Admin" />
        <BooleanInput source="is_blocked" label="Usuario bloqueado" />
        <TextField source="entity_id" label="ID" />
        <EmailField source="user.email" label="Email" />
        <TextField source="user.name" label="Nome" />
        <TextField source="user.nickname" label="Nickname" />
        <TextField source="user.country" label="País" />
        <TextField source="user.city" label="Cidade" />
        <TextField source="user.state" label="Estado" />
      </SimpleForm>
    </Edit>
  );
};

export default PlayerEdit;
