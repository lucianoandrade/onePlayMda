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

const TermsList = props => {
  return (
    <List bulkActionButtons={false} {...props}  actions={<CustomActions />} >
      <Datagrid rowClick="show">
        <p>Texto - Termos de uso</p>
      </Datagrid>
    </List>
  );
};

export default TermsList;