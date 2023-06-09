import type {
  FastifyPluginOptions,
  FastifyInstance,
  FastifyReply,
  FastifyPluginAsync,
} from "fastify";

import { getFiltersFromRequest } from "./features/get-filters-from-request";
import { getPaginatedProducts } from "./features/get-paginated-products";
import { createProduct } from "./features/create-product";
import { productSchema } from "./types/product";
import type {
  CreateProductRequest,
  GetProductsRequest,
} from "./types/requests";
import { purchaseRequestSchema } from "./types/purchase";
import { registerPurchase } from "./features/register-purchase";

const routes: FastifyPluginAsync = async (
  app: FastifyInstance,
  _options: FastifyPluginOptions
) => {
  app.get("/product", async (req: GetProductsRequest, res: FastifyReply) => {
    const { query, options } = getFiltersFromRequest(req);

    const results = await getPaginatedProducts(query, options);

    res.send(results);
  });

  app.post("/product", async (req: CreateProductRequest, res: FastifyReply) => {
    const validationResult = productSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).send({ errors: validationResult.error.issues });
    }

    const product = await createProduct(validationResult.data);
    return res.status(201).send(product);
  });

  app.post(
    "/purchase",
    async (req: CreateProductRequest, res: FastifyReply) => {
      const validationResult = purchaseRequestSchema.safeParse(req.body);

      if (!validationResult.success) {
        return res.status(400).send({ errors: validationResult.error.issues });
      }

      await Promise.all(
        validationResult.data.map((item) => registerPurchase(item))
      );

      return res.status(201).send();
    }
  );
};

export default routes;
