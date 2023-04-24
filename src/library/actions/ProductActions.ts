import { Event, SDK } from "@commercetools/frontend-sdk";
import {
	GetProductQuery,
	ProductQueryQuery,
	QueryProductCategoriesQuery,
} from "../../types/queries/ProductQueries";
import {
	GetProductAction,
	GetSearchableProductAttributesAction,
	ProductQueryAction,
	QueryProductCategoriesAction,
} from "../../types/actions/ProductActions";
import {
	Product,
	Result,
	FilterField,
} from "@commercetools/frontend-domain-types/product";
import { ComposableCommerceEvents } from "../../types/types";
import { OptionsType } from "@commercetools/frontend-sdk/cookieHandling/types";

export type ProductActions = {
	getProduct: GetProductAction;
	query: ProductQueryAction;
	queryCategories: QueryProductCategoriesAction;
	getSearchableAttributes: GetSearchableProductAttributesAction;
};

export const getProductActions = (
	sdk: SDK<ComposableCommerceEvents>
): ProductActions => {
	return {
		getProduct: async (query: GetProductQuery) => {
			const response = await sdk.callAction<Product>({
				actionName: "product/getProduct",
				query,
			});

			if (!response.isError && response.data) {
				sdk.trigger(
					new Event({
						eventName: "productFetched",
						data: {
							product: response.data,
						},
					})
				);
			}
			return response;
		},
		query: async (query: ProductQueryQuery) => {
			const response = await sdk.callAction<Result>({
				actionName: "product/query",
				query,
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "productsQueried",
						data: {
							query: query,
							result: response.data,
						},
					})
				);
			}
			return response;
		},
		queryCategories: async (
			query: QueryProductCategoriesQuery,
			optionsType?: OptionsType
		) => {
			const response = await sdk.callAction<Result>({
				actionName: "product/queryCategories",
				query,
				optionsType,
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "productCategoriesQueried",
						data: {
							query: query,
							result: response.data,
						},
					})
				);
			}
			return response;
		},
		getSearchableAttributes: async () => {
			const response = await sdk.callAction<FilterField[]>({
				actionName: "product/searchableAttributes",
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "searchableProductAttributesFetched",
						data: {
							filterFields: response.data,
						},
					})
				);
			}
			return response;
		},
	};
};
