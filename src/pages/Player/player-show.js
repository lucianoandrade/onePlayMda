import React from "react";
import SimpleArray from "../../components/SimpleArray/SimpleArray";
import {
  BooleanField,
  TextField,
  NumberField,
  Show,
  TabbedShowLayout,
  ArrayField,
  Tab,
  Datagrid
} from "react-admin";

const PlayerShow = props => {
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <Show {...props} title="Usuário" actions={<div />}>
          <TabbedShowLayout>
            <Tab label="Dados do Usuário">
              <BooleanField source="is_admin" label="Admin" />
              <BooleanField source="is_blocked" label="Usuario bloqueado" />
              <TextField source="entity_id" label="ID" />
              <NumberField source="red_star_balance" label="Red Stars" />
              <NumberField source="golden_star_balance" label="Gold Stars" />
              <TextField source="user.email" label="Email" />
              <TextField source="user.name" label="Nome" />
              <TextField source="user.nickname" label="Nickname" />
              <TextField source="player_status" label="Player status" />
              <TextField source="user.country" label="País" />
              <TextField source="user.state" label="Estado" />
              <TextField source="user.postal_code" label="Cep" />
              <TextField source="user.city" label="Cidade" />
              <TextField source="user.street" label="Endereco" />
              <TextField source="user.street_number" label="Número" />
              <TextField source="user.neighborhood" label="Bairro" />
              <TextField source="user.street_complement" label="Complemento" />
              <TextField source="user.date_birth" label="Nascimento" />
              <TextField source="user.cpf" label="CPF" />
              <TextField source="terms" label="Termos" />
            </Tab>

            <Tab label="consoles">
                <ArrayField source="consoles">
                  <Datagrid> 
                    <TextField source="console_id" label="ID" />
                    <TextField source="tag_name" label="Tag Name" />
                    <ArrayField source="game_points">
                      <Datagrid>
                       <TextField source="game_id" label="ID" />
                        <NumberField source="victories" label="pontos" />
                      </Datagrid> 
                    </ArrayField>
                  </Datagrid>
                </ArrayField>
              </Tab>

              <Tab label="transações de Stars">
              <ArrayField source="star_transactions">
                <Datagrid>
                <TextField source="coin_type" label="Tipo de moeda" />
                  <TextField source="operation_date" label="Data da operação" />
                  <TextField source="operation_type" label="Tipo de operação" />
                  <TextField source="source" label="source" />
                  <TextField source="source_id" label="source ID" />
                  <NumberField source="value" label="Valor" />
                </Datagrid>
              </ArrayField>
            </Tab>

            <Tab label="compras">
              <ArrayField source="purchases">
                <Datagrid>
                  <TextField source="payment.code" label="Código" />
                  <TextField source="payment.payment_datetime" label="Data e hora do pagamento" />
                  <TextField source="payment.payment_type" label="Tipo de pagamento" />
                  <ArrayField source="payment.transactions" label="transações">
                    <Datagrid>
                      <TextField source="code" label="Código" />
                      <TextField source="status" label="status" />
                      <TextField source="transaction_datetime" label="Data e hora da transação" />                   
                    </Datagrid>
                  </ArrayField>
                  <TextField source="product.description" label="Descrição do Produto" />
                  <NumberField source="product.duration" label="Duração do produto" />
                  <NumberField source="product.price" label="Preço do produto" />
                  <TextField source="product.star_type" label="Tipo de Star do produto" />
                  <NumberField source="product.star_value" label="Valor em Star do produto" />
                  <TextField source="purchase_datetime" label="Data da compra" />
                  <TextField source="purchase_type" label="Tipo de compra" />
                </Datagrid>
              </ArrayField>
            </Tab>

            <Tab label="Favoritos">
              <SimpleArray source="favorites" label="Favoritos"/>
            </Tab>

            <Tab label="regiões">
              <ArrayField source="countries_regions">
                <Datagrid>
                  <SimpleArray source="countries" label="países"/>
                  <TextField source="entity_id" label="ID" />
                  <NumberField source="minimum_bet" label="aposta mínima" />
                  <TextField source="name" label="nome" />
                </Datagrid>
              </ArrayField>
              <ArrayField source="states_regions">
                <Datagrid>
                  <SimpleArray source="states" label="Estados"/>
                  <TextField source="entity_id" label="ID" />
                  <NumberField source="minimum_bet" label="aposta mínima" />
                  <TextField source="name" label="nome" />
                </Datagrid>
              </ArrayField>
            </Tab>
          </TabbedShowLayout>
        </Show>  
      </div>

    </>
  );
};

export default PlayerShow;