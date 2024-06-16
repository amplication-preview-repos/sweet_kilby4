import * as graphql from "@nestjs/graphql";
import { PrivateChatResolverBase } from "./base/privateChat.resolver.base";
import { PrivateChat } from "./base/PrivateChat";
import { PrivateChatService } from "./privateChat.service";

@graphql.Resolver(() => PrivateChat)
export class PrivateChatResolver extends PrivateChatResolverBase {
  constructor(protected readonly service: PrivateChatService) {
    super(service);
  }
}
