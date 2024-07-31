import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUBSCRIPTION_TITLE_FIELD } from "./SubscriptionTitle";

export const SubscriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="subscriptionId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="customerFeedback" source="customerFeedback" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Roles" source="roles" />
            <TextField label="serviceDescription" source="serviceDescription" />
            <ReferenceField
              label="subscription"
              source="subscription.id"
              reference="Subscription"
            >
              <TextField source={SUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="supplierFeedback" source="supplierFeedback" />
            <TextField label="tags" source="tags" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
            <TextField label="willingToPay" source="willingToPay" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
