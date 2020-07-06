import React from "react";
import {
  Datagrid,
  List,
  CardActions,
  RefreshButton
} from "react-admin";

const CustomActions = () => <CardActions>
                              <RefreshButton />
                            </CardActions>

const privacyPolicyList = props => {
  return (
    <List bulkActionButtons={false} {...props}  actions={<CustomActions />} >
      <Datagrid rowClick="show">
        <p>Texto - Politica de privacidade</p>
      </Datagrid>
    </List>
  );
};

export default privacyPolicyList;