import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroupChatService } from "./groupChat.service";
import { GroupChatControllerBase } from "./base/groupChat.controller.base";

@swagger.ApiTags("groupChats")
@common.Controller("groupChats")
export class GroupChatController extends GroupChatControllerBase {
  constructor(protected readonly service: GroupChatService) {
    super(service);
  }
}
