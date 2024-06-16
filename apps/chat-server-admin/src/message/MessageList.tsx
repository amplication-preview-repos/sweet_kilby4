import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GROUPCHAT_TITLE_FIELD } from "../groupChat/GroupChatTitle";
import { PRIVATECHAT_TITLE_FIELD } from "../privateChat/PrivateChatTitle";

export const MessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Messages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="GroupChat"
          source="groupchat.id"
          reference="GroupChat"
        >
          <TextField source={GROUPCHAT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="PrivateChat"
          source="privatechat.id"
          reference="PrivateChat"
        >
          <TextField source={PRIVATECHAT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="sender" source="sender" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
