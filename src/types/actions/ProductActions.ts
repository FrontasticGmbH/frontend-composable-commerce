import {
    GetProductPayload,
    ProductQueryPayload,
    QueryProductCategoriesPayload,
} from "../payloads/ProductPayloads";
import { FilterField } from "@commercetools/frontend-domain-types/product/FilterField";
import { Product } from "@commercetools/frontend-domain-types/product/Product";
import { Result } from "@commercetools/frontend-domain-types/product/Result";
import { SDKResponse } from "@commercetools/frontend-sdk";

type GetProductAction = (
    payload: GetProductPayload,
) => Promise<SDKResponse<Product>>;

type ProductQueryAction = (
    payload: ProductQueryPayload,
) => Promise<SDKResponse<Result>>;

type QueryProductCategoriesAction = (
    payload: QueryProductCategoriesPayload,
) => Promise<SDKResponse<Result>>;

type GetSearchableProductAttributesAction = () => Promise<
    SDKResponse<FilterField[]>
>;

export {
    GetProductAction,
    ProductQueryAction,
    QueryProductCategoriesAction,
    GetSearchableProductAttributesAction,
};
