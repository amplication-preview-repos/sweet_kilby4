import { GroupChatWhereUniqueInput } from "../groupChat/GroupChatWhereUniqueInput";
import { PrivateChatWhereUniqueInput } from "../privateChat/PrivateChatWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  groupChat?: GroupChatWhereUniqueInput | null;
  privateChat?: PrivateChatWhereUniqueInput | null;
  sender?: string | null;
  timestamp?: Date | null;
};
