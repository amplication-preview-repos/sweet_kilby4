import { Message } from "../message/Message";
import { User } from "../user/User";

export type GroupChat = {
  createdAt: Date;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
