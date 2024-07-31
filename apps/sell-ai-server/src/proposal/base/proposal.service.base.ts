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
  Proposal as PrismaProposal,
  Opportunity as PrismaOpportunity,
  Product as PrismaProduct,
} from "@prisma/client";

export class ProposalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProposalCountArgs, "select">): Promise<number> {
    return this.prisma.proposal.count(args);
  }

  async proposals(
    args: Prisma.ProposalFindManyArgs
  ): Promise<PrismaProposal[]> {
    return this.prisma.proposal.findMany(args);
  }
  async proposal(
    args: Prisma.ProposalFindUniqueArgs
  ): Promise<PrismaProposal | null> {
    return this.prisma.proposal.findUnique(args);
  }
  async createProposal(
    args: Prisma.ProposalCreateArgs
  ): Promise<PrismaProposal> {
    return this.prisma.proposal.create(args);
  }
  async updateProposal(
    args: Prisma.ProposalUpdateArgs
  ): Promise<PrismaProposal> {
    return this.prisma.proposal.update(args);
  }
  async deleteProposal(
    args: Prisma.ProposalDeleteArgs
  ): Promise<PrismaProposal> {
    return this.prisma.proposal.delete(args);
  }

  async getOpportunity(parentId: string): Promise<PrismaOpportunity | null> {
    return this.prisma.proposal
      .findUnique({
        where: { id: parentId },
      })
      .opportunity();
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.proposal
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
