import { MessageCreateNestedManyWithoutGroupChatsInput } from "./MessageCreateNestedManyWithoutGroupChatsInput";
import { UserCreateNestedManyWithoutGroupChatsInput } from "./UserCreateNestedManyWithoutGroupChatsInput";

export type GroupChatCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutGroupChatsInput;
  name?: string | null;
  users?: UserCreateNestedManyWithoutGroupChatsInput;
};
