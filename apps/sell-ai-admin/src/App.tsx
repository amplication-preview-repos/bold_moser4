import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CommunicationList } from "./communication/CommunicationList";
import { CommunicationCreate } from "./communication/CommunicationCreate";
import { CommunicationEdit } from "./communication/CommunicationEdit";
import { CommunicationShow } from "./communication/CommunicationShow";
import { OpportunityList } from "./opportunity/OpportunityList";
import { OpportunityCreate } from "./opportunity/OpportunityCreate";
import { OpportunityEdit } from "./opportunity/OpportunityEdit";
import { OpportunityShow } from "./opportunity/OpportunityShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { SubCategoryList } from "./subCategory/SubCategoryList";
import { SubCategoryCreate } from "./subCategory/SubCategoryCreate";
import { SubCategoryEdit } from "./subCategory/SubCategoryEdit";
import { SubCategoryShow } from "./subCategory/SubCategoryShow";
import { ProposalList } from "./proposal/ProposalList";
import { ProposalCreate } from "./proposal/ProposalCreate";
import { ProposalEdit } from "./proposal/ProposalEdit";
import { ProposalShow } from "./proposal/ProposalShow";
import { MatchList } from "./match/MatchList";
import { MatchCreate } from "./match/MatchCreate";
import { MatchEdit } from "./match/MatchEdit";
import { MatchShow } from "./match/MatchShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Sell.ai"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Communication"
          list={CommunicationList}
          edit={CommunicationEdit}
          create={CommunicationCreate}
          show={CommunicationShow}
        />
        <Resource
          name="Opportunity"
          list={OpportunityList}
          edit={OpportunityEdit}
          create={OpportunityCreate}
          show={OpportunityShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="SubCategory"
          list={SubCategoryList}
          edit={SubCategoryEdit}
          create={SubCategoryCreate}
          show={SubCategoryShow}
        />
        <Resource
          name="Proposal"
          list={ProposalList}
          edit={ProposalEdit}
          create={ProposalCreate}
          show={ProposalShow}
        />
        <Resource
          name="Match"
          list={MatchList}
          edit={MatchEdit}
          create={MatchCreate}
          show={MatchShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
      </Admin>
    </div>
  );
};

export default App;
