import {
	GetProductPayload,
	ProductQueryPayload,
	QueryProductCategoriesPayload
} from "../payloads/ProductPayloads";
import { FilterField } from "@commercetools/frontend-domain-types/product/FilterField";
import { Product } from "@commercetools/frontend-domain-types/product/Product";
import { Result } from "@commercetools/frontend-domain-types/product/Result";

type GetProductAction = (payload: GetProductPayload) => Promise<Product | Error>;

type ProductQueryAction = (payload: ProductQueryPayload) => Promise<Result | Error>;

type QueryProductCategoriesAction = (
	payload: QueryProductCategoriesPayload,
) => Promise<Result | Error>;

type GetSearchableProductAttributesAction = () => Promise<FilterField[] | Error>;

export {
	GetProductAction,
	ProductQueryAction,
	QueryProductCategoriesAction,
	GetSearchableProductAttributesAction,
};
