import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { GroupChatTitle } from "../groupChat/GroupChatTitle";
import { PrivateChatTitle } from "../privateChat/PrivateChatTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="groupChat.id"
          reference="GroupChat"
          label="GroupChat"
        >
          <SelectInput optionText={GroupChatTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="privateChat.id"
          reference="PrivateChat"
          label="PrivateChat"
        >
          <SelectInput optionText={PrivateChatTitle} />
        </ReferenceInput>
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
