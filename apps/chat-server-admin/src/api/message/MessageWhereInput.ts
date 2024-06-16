import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupChatWhereUniqueInput } from "../groupChat/GroupChatWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PrivateChatWhereUniqueInput } from "../privateChat/PrivateChatWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  groupChat?: GroupChatWhereUniqueInput;
  id?: StringFilter;
  privateChat?: PrivateChatWhereUniqueInput;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
