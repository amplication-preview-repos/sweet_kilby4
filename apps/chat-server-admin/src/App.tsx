import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GroupChatList } from "./groupChat/GroupChatList";
import { GroupChatCreate } from "./groupChat/GroupChatCreate";
import { GroupChatEdit } from "./groupChat/GroupChatEdit";
import { GroupChatShow } from "./groupChat/GroupChatShow";
import { PrivateChatList } from "./privateChat/PrivateChatList";
import { PrivateChatCreate } from "./privateChat/PrivateChatCreate";
import { PrivateChatEdit } from "./privateChat/PrivateChatEdit";
import { PrivateChatShow } from "./privateChat/PrivateChatShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"ChatServer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GroupChat"
          list={GroupChatList}
          edit={GroupChatEdit}
          create={GroupChatCreate}
          show={GroupChatShow}
        />
        <Resource
          name="PrivateChat"
          list={PrivateChatList}
          edit={PrivateChatEdit}
          create={PrivateChatCreate}
          show={PrivateChatShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
