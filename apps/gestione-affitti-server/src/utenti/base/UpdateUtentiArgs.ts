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
import { UtentiWhereUniqueInput } from "./UtentiWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UtentiUpdateInput } from "./UtentiUpdateInput";

@ArgsType()
class UpdateUtentiArgs {
  @ApiProperty({
    required: true,
    type: () => UtentiWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UtentiWhereUniqueInput)
  @Field(() => UtentiWhereUniqueInput, { nullable: false })
  where!: UtentiWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UtentiUpdateInput,
  })
  @ValidateNested()
  @Type(() => UtentiUpdateInput)
  @Field(() => UtentiUpdateInput, { nullable: false })
  data!: UtentiUpdateInput;
}

export { UpdateUtentiArgs as UpdateUtentiArgs };
