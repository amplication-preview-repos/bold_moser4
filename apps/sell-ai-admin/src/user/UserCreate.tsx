import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="customerFeedback"
          multiline
          source="customerFeedback"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput
          label="serviceDescription"
          multiline
          source="serviceDescription"
        />
        <ReferenceInput
          source="subscription.id"
          reference="Subscription"
          label="subscription"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
        <TextInput
          label="supplierFeedback"
          multiline
          source="supplierFeedback"
        />
        <SelectArrayInput
          label="tags"
          source="tags"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <NumberInput step={1} label="willingToPay" source="willingToPay" />
      </SimpleForm>
    </Create>
  );
};
