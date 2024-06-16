import { GroupChatWhereInput } from "./GroupChatWhereInput";
import { GroupChatOrderByInput } from "./GroupChatOrderByInput";

export type GroupChatFindManyArgs = {
  where?: GroupChatWhereInput;
  orderBy?: Array<GroupChatOrderByInput>;
  skip?: number;
  take?: number;
};
