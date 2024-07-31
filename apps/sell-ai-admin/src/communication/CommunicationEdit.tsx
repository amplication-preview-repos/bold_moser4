import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommunicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="matchedCustomer" source="matchedCustomer" />
        <DateTimeInput label="scheduleCall" source="scheduleCall" />
      </SimpleForm>
    </Edit>
  );
};
