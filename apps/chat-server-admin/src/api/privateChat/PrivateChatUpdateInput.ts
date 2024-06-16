import { MessageUpdateManyWithoutPrivateChatsInput } from "./MessageUpdateManyWithoutPrivateChatsInput";

export type PrivateChatUpdateInput = {
  messages?: MessageUpdateManyWithoutPrivateChatsInput;
  user1?: string | null;
  user2?: string | null;
};
