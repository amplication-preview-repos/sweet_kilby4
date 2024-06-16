import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupChatServiceBase } from "./base/groupChat.service.base";

@Injectable()
export class GroupChatService extends GroupChatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
