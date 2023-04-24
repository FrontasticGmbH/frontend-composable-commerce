import {
	GetProductQuery,
	ProductQueryQuery,
	QueryProductCategoriesQuery,
} from "../queries/ProductQueries";
import {
	FilterField,
	Product,
	Result,
} from "@commercetools/frontend-domain-types/product";
import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";

type GetProductAction = (
	query: GetProductQuery
) => Promise<SDKResponse<Product>>;

type ProductQueryAction = (
	query: ProductQueryQuery
) => Promise<SDKResponse<Result>>;

type QueryProductCategoriesAction = (
	query: QueryProductCategoriesQuery,
	serverOptions?: ServerOptions
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
