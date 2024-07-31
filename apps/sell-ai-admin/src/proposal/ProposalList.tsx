import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProposalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Proposals"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="proposalContent" source="proposalContent" />
        <TextField label="status" source="status" />
        <TextField label="supplier" source="supplier" />
        <TextField label="supplierUser" source="supplierUser" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
