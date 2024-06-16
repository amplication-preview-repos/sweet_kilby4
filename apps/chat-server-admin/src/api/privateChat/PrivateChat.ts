import { Message } from "../message/Message";

export type PrivateChat = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
  user1: string | null;
  user2: string | null;
};
