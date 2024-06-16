import { GroupChatWhereUniqueInput } from "../groupChat/GroupChatWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  groupChat?: GroupChatWhereUniqueInput | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
