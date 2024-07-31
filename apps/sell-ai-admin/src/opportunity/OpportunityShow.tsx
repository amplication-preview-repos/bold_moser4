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

import { OPPORTUNITY_TITLE_FIELD } from "./OpportunityTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const OpportunityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Proposal"
          target="opportunityId"
          label="Proposals"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="customer" source="customer" />
            <TextField label="customerUser" source="customerUser" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="opportunity"
              source="opportunity.id"
              reference="Opportunity"
            >
              <TextField source={OPPORTUNITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="proposalContent" source="proposalContent" />
            <TextField label="status" source="status" />
            <TextField label="supplier" source="supplier" />
            <TextField label="supplierUser" source="supplierUser" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
