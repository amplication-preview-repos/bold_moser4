import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OpportunityTitle } from "../opportunity/OpportunityTitle";
import { ProductTitle } from "../product/ProductTitle";

export const ProposalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="customer" source="customer" />
        <TextInput label="customerUser" source="customerUser" />
        <ReferenceInput
          source="opportunity.id"
          reference="Opportunity"
          label="opportunity"
        >
          <SelectInput optionText={OpportunityTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="proposalContent" multiline source="proposalContent" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="supplier" source="supplier" />
        <TextInput label="supplierUser" source="supplierUser" />
      </SimpleForm>
    </Edit>
  );
};
