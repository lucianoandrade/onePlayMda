import React from "react";
import {
  Edit,
  SimpleForm,
} from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";
import RichTextInput from 'ra-input-rich-text';

const TermsEdit = props => {
  return (
    <Edit title="Termos de Uso" {...props}>
      <SimpleForm toolbar={<CustomToolbar />} >
        <RichTextInput source="terms" label="Termos de Uso" />
      </SimpleForm>
    </Edit>
  );
};

export default TermsEdit;