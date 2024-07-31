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
import { ProductService } from "../product.service";
import { ProductCreateInput } from "./ProductCreateInput";
import { Product } from "./Product";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ProductUpdateInput } from "./ProductUpdateInput";
import { ProposalFindManyArgs } from "../../proposal/base/ProposalFindManyArgs";
import { Proposal } from "../../proposal/base/Proposal";
import { ProposalWhereUniqueInput } from "../../proposal/base/ProposalWhereUniqueInput";

export class ProductControllerBase {
  constructor(protected readonly service: ProductService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Product })
  async createProduct(
    @common.Body() data: ProductCreateInput
  ): Promise<Product> {
    return await this.service.createProduct({
      data: {
        ...data,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,
      },
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        supplier: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Product] })
  @ApiNestedQuery(ProductFindManyArgs)
  async products(@common.Req() request: Request): Promise<Product[]> {
    const args = plainToClass(ProductFindManyArgs, request.query);
    return this.service.products({
      ...args,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        supplier: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async product(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    const result = await this.service.product({
      where: params,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        supplier: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProduct(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() data: ProductUpdateInput
  ): Promise<Product | null> {
    try {
      return await this.service.updateProduct({
        where: params,
        data: {
          ...data,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,
        },
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          name: true,
          supplier: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProduct(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct({
        where: params,
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          name: true,
          supplier: true,
          updatedAt: true,
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

  @common.Get("/:id/proposals")
  @ApiNestedQuery(ProposalFindManyArgs)
  async findProposals(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Proposal[]> {
    const query = plainToClass(ProposalFindManyArgs, request.query);
    const results = await this.service.findProposals(params.id, {
      ...query,
      select: {
        createdAt: true,
        customer: true,
        customerUser: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        status: true,
        supplier: true,
        supplierUser: true,
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

  @common.Post("/:id/proposals")
  async connectProposals(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        connect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/proposals")
  async updateProposals(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        set: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/proposals")
  async disconnectProposals(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        disconnect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }
}
