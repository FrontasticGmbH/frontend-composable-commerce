import {
	GetProductPayload,
	ProductQueryPayload,
	QueryProductCategoriesPayload
} from "../payloads/ProductPayloads";
import { FilterField } from "@commercetools/domain-types/product/FilterField";
import { Product } from "@commercetools/domain-types/product/Product";
import { Result } from "@commercetools/domain-types/product/Result";

type GetProductAction = (payload: GetProductPayload) => Promise<Product>;

type ProductQueryAction = (payload: ProductQueryPayload) => Promise<Result>;

type QueryProductCategoriesAction = (
	payload: QueryProductCategoriesPayload,
) => Promise<Result>;

type GetSearchableProductAttributesAction = () => Promise<FilterField[]>;

export {
	GetProductAction,
	ProductQueryAction,
	QueryProductCategoriesAction,
	GetSearchableProductAttributesAction,
};
