import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Create,
  SimpleForm,
  ArrayInput,
  TextInput,
  SimpleFormIterator
} from "react-admin";

const useStyles = makeStyles({
    none: {display: "none"}
  });

const PlatformCreate = props => {
  const classes = useStyles();

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" label="Plataforma" /> 
        <TextInput source="logo_path" label="Imagem do console" type="url"/>
        <ArrayInput source="games">
          <SimpleFormIterator >
            <TextInput source="name" label="game" />
            <TextInput source="logo_path" label="Imagem do Jogo" type="url"/>
            <TextInput source="entity_id" defaultValue={""} className={classes.none}/>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default PlatformCreate;
