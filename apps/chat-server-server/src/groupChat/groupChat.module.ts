import { Module } from "@nestjs/common";
import { GroupChatModuleBase } from "./base/groupChat.module.base";
import { GroupChatService } from "./groupChat.service";
import { GroupChatController } from "./groupChat.controller";
import { GroupChatResolver } from "./groupChat.resolver";

@Module({
  imports: [GroupChatModuleBase],
  controllers: [GroupChatController],
  providers: [GroupChatService, GroupChatResolver],
  exports: [GroupChatService],
})
export class GroupChatModule {}
