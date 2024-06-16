import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GROUPCHAT_TITLE_FIELD } from "../groupChat/GroupChatTitle";
import { PRIVATECHAT_TITLE_FIELD } from "../privateChat/PrivateChatTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
