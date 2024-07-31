/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProposalWhereInput } from "./ProposalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProposalOrderByInput } from "./ProposalOrderByInput";

@ArgsType()
class ProposalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProposalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProposalWhereInput, { nullable: true })
  @Type(() => ProposalWhereInput)
  where?: ProposalWhereInput;

  @ApiProperty({
    required: false,
    type: [ProposalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProposalOrderByInput], { nullable: true })
  @Type(() => ProposalOrderByInput)
  orderBy?: Array<ProposalOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProposalFindManyArgs as ProposalFindManyArgs };
