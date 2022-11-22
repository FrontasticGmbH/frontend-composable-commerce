import { ProductQuery } from "@commercetools/domain-types/query/ProductQuery";

type GetProductPayload = {
	query: {
		id: string;
		sku: string;
	};
};

type ProductQueryPayload = {
	query: ProductQuery;
};

type QueryProductCategoriesPayload = {
	query: {
		limit?: number;
		cursor?: string;
		slug?: string;
	};
};

export {
	GetProductPayload,
	ProductQueryPayload,
	QueryProductCategoriesPayload
};
