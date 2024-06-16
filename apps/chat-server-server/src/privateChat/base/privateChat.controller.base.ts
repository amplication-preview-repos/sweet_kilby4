/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PrivateChatService } from "../privateChat.service";
import { PrivateChatCreateInput } from "./PrivateChatCreateInput";
import { PrivateChat } from "./PrivateChat";
import { PrivateChatFindManyArgs } from "./PrivateChatFindManyArgs";
import { PrivateChatWhereUniqueInput } from "./PrivateChatWhereUniqueInput";
import { PrivateChatUpdateInput } from "./PrivateChatUpdateInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";

export class PrivateChatControllerBase {
  constructor(protected readonly service: PrivateChatService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PrivateChat })
  async createPrivateChat(
    @common.Body() data: PrivateChatCreateInput
  ): Promise<PrivateChat> {
    return await this.service.createPrivateChat({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PrivateChat] })
  @ApiNestedQuery(PrivateChatFindManyArgs)
  async privateChats(@common.Req() request: Request): Promise<PrivateChat[]> {
    const args = plainToClass(PrivateChatFindManyArgs, request.query);
    return this.service.privateChats({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PrivateChat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async privateChat(
    @common.Param() params: PrivateChatWhereUniqueInput
  ): Promise<PrivateChat | null> {
    const result = await this.service.privateChat({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PrivateChat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePrivateChat(
    @common.Param() params: PrivateChatWhereUniqueInput,
    @common.Body() data: PrivateChatUpdateInput
  ): Promise<PrivateChat | null> {
    try {
      return await this.service.updatePrivateChat({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
          user1: true,
          user2: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PrivateChat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePrivateChat(
    @common.Param() params: PrivateChatWhereUniqueInput
  ): Promise<PrivateChat | null> {
    try {
      return await this.service.deletePrivateChat({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
          user1: true,
          user2: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/messages")
  @ApiNestedQuery(MessageFindManyArgs)
  async findMessages(
    @common.Req() request: Request,
    @common.Param() params: PrivateChatWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessages(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,

        groupChat: {
          select: {
            id: true,
          },
        },

        id: true,

        privateChat: {
          select: {
            id: true,
          },
        },

        sender: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messages")
  async connectMessages(
    @common.Param() params: PrivateChatWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        connect: body,
      },
    };
    await this.service.updatePrivateChat({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messages")
  async updateMessages(
    @common.Param() params: PrivateChatWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        set: body,
      },
    };
    await this.service.updatePrivateChat({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messages")
  async disconnectMessages(
    @common.Param() params: PrivateChatWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        disconnect: body,
      },
    };
    await this.service.updatePrivateChat({
      where: params,
      data,
      select: { id: true },
    });
  }
}
