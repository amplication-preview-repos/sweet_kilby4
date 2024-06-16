import { Module } from "@nestjs/common";
import { PrivateChatModuleBase } from "./base/privateChat.module.base";
import { PrivateChatService } from "./privateChat.service";
import { PrivateChatController } from "./privateChat.controller";
import { PrivateChatResolver } from "./privateChat.resolver";

@Module({
  imports: [PrivateChatModuleBase],
  controllers: [PrivateChatController],
  providers: [PrivateChatService, PrivateChatResolver],
  exports: [PrivateChatService],
})
export class PrivateChatModule {}
