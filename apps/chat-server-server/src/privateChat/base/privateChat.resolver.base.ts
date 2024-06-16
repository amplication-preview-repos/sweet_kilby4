/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PrivateChat } from "./PrivateChat";
import { PrivateChatCountArgs } from "./PrivateChatCountArgs";
import { PrivateChatFindManyArgs } from "./PrivateChatFindManyArgs";
import { PrivateChatFindUniqueArgs } from "./PrivateChatFindUniqueArgs";
import { CreatePrivateChatArgs } from "./CreatePrivateChatArgs";
import { UpdatePrivateChatArgs } from "./UpdatePrivateChatArgs";
import { DeletePrivateChatArgs } from "./DeletePrivateChatArgs";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { PrivateChatService } from "../privateChat.service";
@graphql.Resolver(() => PrivateChat)
export class PrivateChatResolverBase {
  constructor(protected readonly service: PrivateChatService) {}

  async _privateChatsMeta(
    @graphql.Args() args: PrivateChatCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PrivateChat])
  async privateChats(
    @graphql.Args() args: PrivateChatFindManyArgs
  ): Promise<PrivateChat[]> {
    return this.service.privateChats(args);
  }

  @graphql.Query(() => PrivateChat, { nullable: true })
  async privateChat(
    @graphql.Args() args: PrivateChatFindUniqueArgs
  ): Promise<PrivateChat | null> {
    const result = await this.service.privateChat(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PrivateChat)
  async createPrivateChat(
    @graphql.Args() args: CreatePrivateChatArgs
  ): Promise<PrivateChat> {
    return await this.service.createPrivateChat({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PrivateChat)
  async updatePrivateChat(
    @graphql.Args() args: UpdatePrivateChatArgs
  ): Promise<PrivateChat | null> {
    try {
      return await this.service.updatePrivateChat({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PrivateChat)
  async deletePrivateChat(
    @graphql.Args() args: DeletePrivateChatArgs
  ): Promise<PrivateChat | null> {
    try {
      return await this.service.deletePrivateChat(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Message], { name: "messages" })
  async findMessages(
    @graphql.Parent() parent: PrivateChat,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
