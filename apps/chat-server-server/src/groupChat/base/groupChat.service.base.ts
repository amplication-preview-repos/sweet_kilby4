/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  GroupChat as PrismaGroupChat,
  Message as PrismaMessage,
  User as PrismaUser,
} from "@prisma/client";

export class GroupChatServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GroupChatCountArgs, "select">
  ): Promise<number> {
    return this.prisma.groupChat.count(args);
  }

  async groupChats<T extends Prisma.GroupChatFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupChatFindManyArgs>
  ): Promise<PrismaGroupChat[]> {
    return this.prisma.groupChat.findMany<Prisma.GroupChatFindManyArgs>(args);
  }
  async groupChat<T extends Prisma.GroupChatFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupChatFindUniqueArgs>
  ): Promise<PrismaGroupChat | null> {
    return this.prisma.groupChat.findUnique(args);
  }
  async createGroupChat<T extends Prisma.GroupChatCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupChatCreateArgs>
  ): Promise<PrismaGroupChat> {
    return this.prisma.groupChat.create<T>(args);
  }
  async updateGroupChat<T extends Prisma.GroupChatUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupChatUpdateArgs>
  ): Promise<PrismaGroupChat> {
    return this.prisma.groupChat.update<T>(args);
  }
  async deleteGroupChat<T extends Prisma.GroupChatDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupChatDeleteArgs>
  ): Promise<PrismaGroupChat> {
    return this.prisma.groupChat.delete(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.groupChat
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.groupChat
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}
