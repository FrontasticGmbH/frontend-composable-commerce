import { ProductQuery } from "@commercetools/frontend-domain-types/query/ProductQuery";

type GetProductQuery = {
	id: string;
	sku: string;
};

type ProductQueryQuery = Omit<ProductQuery, "filters" | "facets" | "sortAttributes">;

type QueryProductCategoriesQuery = {
	limit?: number;
	cursor?: string;
	slug?: string;
};

export {
	GetProductQuery,
	ProductQueryQuery,
	QueryProductCategoriesQuery
}
