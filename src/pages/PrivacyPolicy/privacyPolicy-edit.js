import React from "react";
import {
  Edit,
  SimpleForm,
} from "react-admin";
import CustomToolbar from "../../components/CustomToolbar/CustomToolbar";
import RichTextInput from 'ra-input-rich-text';

const PrivacyPolicyEdit = props => {
  return (
    <Edit title="Politica de privacidade" {...props}>
      <SimpleForm toolbar={<CustomToolbar />} >
        <RichTextInput source="privacy_policy" label="Politica de privacidade" />
      </SimpleForm>
    </Edit>
  );
};

export default PrivacyPolicyEdit;