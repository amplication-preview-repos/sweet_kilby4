import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrivateChatServiceBase } from "./base/privateChat.service.base";

@Injectable()
export class PrivateChatService extends PrivateChatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
