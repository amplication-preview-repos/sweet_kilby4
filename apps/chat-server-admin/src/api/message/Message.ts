import { GroupChat } from "../groupChat/GroupChat";
import { PrivateChat } from "../privateChat/PrivateChat";

export type Message = {
  content: string | null;
  createdAt: Date;
  groupChat?: GroupChat | null;
  id: string;
  privateChat?: PrivateChat | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
