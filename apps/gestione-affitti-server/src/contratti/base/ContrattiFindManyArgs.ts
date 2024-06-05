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
import { ContrattiWhereInput } from "./ContrattiWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContrattiOrderByInput } from "./ContrattiOrderByInput";

@ArgsType()
class ContrattiFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContrattiWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContrattiWhereInput, { nullable: true })
  @Type(() => ContrattiWhereInput)
  where?: ContrattiWhereInput;

  @ApiProperty({
    required: false,
    type: [ContrattiOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContrattiOrderByInput], { nullable: true })
  @Type(() => ContrattiOrderByInput)
  orderBy?: Array<ContrattiOrderByInput>;

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

export { ContrattiFindManyArgs as ContrattiFindManyArgs };
