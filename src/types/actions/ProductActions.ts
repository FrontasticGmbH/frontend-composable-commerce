import {
	GetProductPayload,
	ProductQueryPayload,
	QueryProductCategoriesPayload
} from "../payloads/ProductPayloads";
import { FilterField } from "@commercetools/frontend-domain-types/product/FilterField";
import { Product } from "@commercetools/frontend-domain-types/product/Product";
import { Result } from "@commercetools/frontend-domain-types/product/Result";
import { sdk } from "@commercetools/frontend-sdk";

type GetProductAction = (payload: GetProductPayload) => ReturnType<typeof sdk.callAction<Product>>;

type ProductQueryAction = (payload: ProductQueryPayload) => ReturnType<typeof sdk.callAction<Result>>;

type QueryProductCategoriesAction = (
	payload: QueryProductCategoriesPayload,
) => ReturnType<typeof sdk.callAction<Result>>;

type GetSearchableProductAttributesAction = () => ReturnType<typeof sdk.callAction<FilterField[]>>;

export {
	GetProductAction,
	ProductQueryAction,
	QueryProductCategoriesAction,
	GetSearchableProductAttributesAction,
};
