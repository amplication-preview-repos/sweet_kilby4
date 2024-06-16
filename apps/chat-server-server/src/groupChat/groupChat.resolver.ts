import * as graphql from "@nestjs/graphql";
import { GroupChatResolverBase } from "./base/groupChat.resolver.base";
import { GroupChat } from "./base/GroupChat";
import { GroupChatService } from "./groupChat.service";

@graphql.Resolver(() => GroupChat)
export class GroupChatResolver extends GroupChatResolverBase {
  constructor(protected readonly service: GroupChatService) {
    super(service);
  }
}
