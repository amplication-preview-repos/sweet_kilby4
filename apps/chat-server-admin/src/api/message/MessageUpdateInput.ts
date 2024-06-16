import { GroupChatWhereUniqueInput } from "../groupChat/GroupChatWhereUniqueInput";
import { PrivateChatWhereUniqueInput } from "../privateChat/PrivateChatWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  groupChat?: GroupChatWhereUniqueInput | null;
  privateChat?: PrivateChatWhereUniqueInput | null;
  sender?: string | null;
  timestamp?: Date | null;
};
