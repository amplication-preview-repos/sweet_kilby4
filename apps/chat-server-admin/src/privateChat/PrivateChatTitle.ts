import { PrivateChat as TPrivateChat } from "../api/privateChat/PrivateChat";

export const PRIVATECHAT_TITLE_FIELD = "user1";

export const PrivateChatTitle = (record: TPrivateChat): string => {
  return record.user1?.toString() || String(record.id);
};
