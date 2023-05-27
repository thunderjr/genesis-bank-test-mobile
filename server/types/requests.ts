import type { FastifyRequest } from "fastify";
import { IProduct } from "./product";

export type GetProductsRequest = FastifyRequest<{
  Querystring: {
    name: string | string[];
    category: string | string[];
    page: string | string[];
    limit: string | string[];
  };
}>;

export type CreateProductRequest = FastifyRequest<{
  Body: IProduct;
}>;
