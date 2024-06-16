import { PrivateChatWhereInput } from "./PrivateChatWhereInput";
import { PrivateChatOrderByInput } from "./PrivateChatOrderByInput";

export type PrivateChatFindManyArgs = {
  where?: PrivateChatWhereInput;
  orderBy?: Array<PrivateChatOrderByInput>;
  skip?: number;
  take?: number;
};
