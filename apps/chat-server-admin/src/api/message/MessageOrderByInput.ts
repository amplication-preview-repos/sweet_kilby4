import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  groupChatId?: SortOrder;
  id?: SortOrder;
  privateChatId?: SortOrder;
  sender?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
