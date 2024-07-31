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
import { Proposal } from "./Proposal";
import { ProposalCountArgs } from "./ProposalCountArgs";
import { ProposalFindManyArgs } from "./ProposalFindManyArgs";
import { ProposalFindUniqueArgs } from "./ProposalFindUniqueArgs";
import { CreateProposalArgs } from "./CreateProposalArgs";
import { UpdateProposalArgs } from "./UpdateProposalArgs";
import { DeleteProposalArgs } from "./DeleteProposalArgs";
import { Product } from "../../product/base/Product";
import { ProposalService } from "../proposal.service";
@graphql.Resolver(() => Proposal)
export class ProposalResolverBase {
  constructor(protected readonly service: ProposalService) {}

  async _proposalsMeta(
    @graphql.Args() args: ProposalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Proposal])
  async proposals(
    @graphql.Args() args: ProposalFindManyArgs
  ): Promise<Proposal[]> {
    return this.service.proposals(args);
  }

  @graphql.Query(() => Proposal, { nullable: true })
  async proposal(
    @graphql.Args() args: ProposalFindUniqueArgs
  ): Promise<Proposal | null> {
    const result = await this.service.proposal(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Proposal)
  async createProposal(
    @graphql.Args() args: CreateProposalArgs
  ): Promise<Proposal> {
    return await this.service.createProposal({
      ...args,
      data: {
        ...args.data,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Proposal)
  async updateProposal(
    @graphql.Args() args: UpdateProposalArgs
  ): Promise<Proposal | null> {
    try {
      return await this.service.updateProposal({
        ...args,
        data: {
          ...args.data,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Proposal)
  async deleteProposal(
    @graphql.Args() args: DeleteProposalArgs
  ): Promise<Proposal | null> {
    try {
      return await this.service.deleteProposal(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async getProduct(
    @graphql.Parent() parent: Proposal
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}