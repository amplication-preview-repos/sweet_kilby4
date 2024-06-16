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

import { GROUPCHAT_TITLE_FIELD } from "./GroupChatTitle";
import { PRIVATECHAT_TITLE_FIELD } from "../privateChat/PrivateChatTitle";

export const GroupChatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Message"
          target="groupChatId"
          label="Messages"
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
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="groupChatId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <ReferenceField
              label="GroupChat"
              source="groupchat.id"
              reference="GroupChat"
            >
              <TextField source={GROUPCHAT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
