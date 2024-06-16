/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { GroupChatWhereUniqueInput } from "../../groupChat/base/GroupChatWhereUniqueInput";
import { Type } from "class-transformer";
import { PrivateChatWhereUniqueInput } from "../../privateChat/base/PrivateChatWhereUniqueInput";

@InputType()
class MessageCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => GroupChatWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GroupChatWhereUniqueInput)
  @IsOptional()
  @Field(() => GroupChatWhereUniqueInput, {
    nullable: true,
  })
  groupChat?: GroupChatWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PrivateChatWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PrivateChatWhereUniqueInput)
  @IsOptional()
  @Field(() => PrivateChatWhereUniqueInput, {
    nullable: true,
  })
  privateChat?: PrivateChatWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sender?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { MessageCreateInput as MessageCreateInput };
