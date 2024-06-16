import { MessageUpdateManyWithoutGroupChatsInput } from "./MessageUpdateManyWithoutGroupChatsInput";
import { UserUpdateManyWithoutGroupChatsInput } from "./UserUpdateManyWithoutGroupChatsInput";

export type GroupChatUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutGroupChatsInput;
  name?: string | null;
  users?: UserUpdateManyWithoutGroupChatsInput;
};
