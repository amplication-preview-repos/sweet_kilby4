import { MessageCreateNestedManyWithoutPrivateChatsInput } from "./MessageCreateNestedManyWithoutPrivateChatsInput";

export type PrivateChatCreateInput = {
  messages?: MessageCreateNestedManyWithoutPrivateChatsInput;
  user1?: string | null;
  user2?: string | null;
};
