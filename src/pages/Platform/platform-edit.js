import React from "react";
import {
  Edit,
  SimpleFormIterator,
  TextInput,
  ArrayInput,
  SimpleForm,
} from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";

const PlatformEdit = props => {
  return (
    <Edit title="Plataformas" {...props}>
      <SimpleForm toolbar={<CustomToolbar />} >
        <TextInput source="name" label="Plataforma" />
        <TextInput source="logo_path" label="Imagem do console" type="url" /> 
        <ArrayInput source="games">
          <SimpleFormIterator>
            <TextInput source="name" label="game" />
            <TextInput label="Imagem do Jogo" source="logo_path" type="url" />
          </SimpleFormIterator >
        </ArrayInput> 
      </SimpleForm>
    </Edit>
  );
};

export default PlatformEdit;