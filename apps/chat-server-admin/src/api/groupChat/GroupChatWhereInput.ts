import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type GroupChatWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
