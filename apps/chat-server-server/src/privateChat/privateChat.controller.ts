import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrivateChatService } from "./privateChat.service";
import { PrivateChatControllerBase } from "./base/privateChat.controller.base";

@swagger.ApiTags("privateChats")
@common.Controller("privateChats")
export class PrivateChatController extends PrivateChatControllerBase {
  constructor(protected readonly service: PrivateChatService) {
    super(service);
  }
}
