import { GroupChat as TGroupChat } from "../api/groupChat/GroupChat";

export const GROUPCHAT_TITLE_FIELD = "name";

export const GroupChatTitle = (record: TGroupChat): string => {
  return record.name?.toString() || String(record.id);
};
