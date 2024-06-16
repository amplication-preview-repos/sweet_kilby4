import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupChatWhereUniqueInput } from "../groupChat/GroupChatWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  groupChat?: GroupChatWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
