import { rememberMeCookie, Event, SDK } from "@commercetools/frontend-sdk";
import {
	AddAccountAddressPayload,
	ChangeAccountPasswordPayload,
	ConfirmAccountPayload,
	LoginAccountPayload,
	RegisterAccountPayload,
	RemoveAccountAddressPayload,
	RequestAccountConfirmationEmailPayload,
	RequestAccountPasswordResetPayload,
	ResetAccountPasswordPayload,
	SetDefaultAccountBillingAddressPayload,
	SetDefaultAccountShippingAddressPayload,
	UpdateAccountAddressPayload,
	UpdateAccountPayload
} from "../../types/payloads/AccountPayloads";
import {
	AddAccountAddressAction,
	ChangeAccountPasswordAction,
	ConfirmAccountAction,
	GetAccountAction,
	GetAccountActionReturn,
	LoginAccountAction,
	LogoutAccountAction,
	RegisterAccountAction,
	RemoveAccountAddressAction,
	RequestAccountConfirmationEmailAction,
	RequestAccountPasswordResetAction,
	ResetAccountPasswordAction,
	SetDefaultAccountBillingAddressAction,
	SetDefaultAccountShippingAddressAction,
	UpdateAccountAction,
	UpdateAccountAddressAction
} from "../../types/actions/AccountActions";
import { Account } from "@commercetools/frontend-domain-types/account/Account";
import { Address } from "@commercetools/frontend-domain-types/account/Address";
import { ComposableCommerceEvents } from "../../types/types";

export type AccountActions = {
	getAccount: GetAccountAction;
	login: LoginAccountAction;
	logout: LogoutAccountAction;
	register: RegisterAccountAction;
	confirm: ConfirmAccountAction;
	requestConfirmationEmail: RequestAccountConfirmationEmailAction;
	changePassword: ChangeAccountPasswordAction;
	requestResetPassword: RequestAccountPasswordResetAction;
	resetPassword: ResetAccountPasswordAction;
	updateAccount: UpdateAccountAction;
	addAddress: AddAccountAddressAction;
	updateAddress: UpdateAccountAddressAction;
	removeAddress: RemoveAccountAddressAction;
	setDefaultBillingAddress: SetDefaultAccountBillingAddressAction;
	setDefaultShippingAddress: SetDefaultAccountShippingAddressAction;
};

const addressesAreEqual = function(
	firstAddress: Address,
	secondAddress: Address,
	compareIds: boolean
) {
	return (
		!compareIds ||
		(compareIds &&
			firstAddress.addressId === secondAddress.addressId &&
			firstAddress.streetName === secondAddress.streetName &&
			firstAddress.streetNumber === secondAddress.streetNumber &&
			firstAddress.additionalStreetInfo ===
				secondAddress.additionalStreetInfo &&
			firstAddress.additionalAddressInfo ===
				secondAddress.additionalAddressInfo &&
			firstAddress.city === secondAddress.city &&
			firstAddress.state === secondAddress.state &&
			firstAddress.country === secondAddress.country &&
			firstAddress.postalCode === secondAddress.postalCode &&
			firstAddress.salutation === secondAddress.salutation &&
			firstAddress.firstName === secondAddress.firstName &&
			firstAddress.lastName === secondAddress.lastName &&
			firstAddress.isDefaultBillingAddress ===
				secondAddress.isDefaultBillingAddress &&
			firstAddress.isDefaultShippingAddress ===
				secondAddress.isDefaultShippingAddress &&
			firstAddress.phone === secondAddress.phone)
	);
};

export const getAccountActions = (
	sdk: SDK<ComposableCommerceEvents>
): AccountActions => {
	return {
		getAccount: async () => {
			const response = await sdk.callAction<GetAccountActionReturn>({
				actionName: "account/getAccount"
			});

			if (!response.isError && response.data.account) {
				sdk.trigger(
					new Event({
						eventName: "accountFetched",
						data: {
							account: response.data.account
						}
					})
				);
			}
			return response;
		},
		login: async (payload: LoginAccountPayload) => {
			const remember = payload.remember;
			payload.remember = undefined;

			const response = await sdk.callAction<Account>({
				actionName: "account/login",
				payload
			});

			if (!response.isError) {
				if (remember) {
					rememberMeCookie.set(true);
				}
				sdk.trigger(
					new Event({
						eventName: "userLoggedIn",
						data: {
							account: response.data
						}
					})
				);
			}

			return response;
		},
		logout: async () => {
			const response = await sdk.callAction<void>({
				actionName: "account/logout"
			});

			if (!response.isError) {
				rememberMeCookie.remove();
				sdk.trigger(
					new Event({
						eventName: "userLoggedOut",
						data: {}
					})
				);
			}
			return response;
		},
		register: async (payload: RegisterAccountPayload) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/register",
				payload
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "userRegistered",
						data: {
							account: response.data
						}
					})
				);
			}
			return response;
		},
		confirm: async (payload: ConfirmAccountPayload) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/confirm",
				payload
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "accountConfirmed",
						data: {
							account: response.data
						}
					})
				);
			}
			return response;
		},
		requestConfirmationEmail: async (
			payload: RequestAccountConfirmationEmailPayload
		) => {
			const response = await sdk.callAction<void>({
				actionName: "account/requestConfirmationEmail",
				payload
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "accountConfirmationEmailRequested",
						data: {
							email: payload.email
						}
					})
				);
			}
			return response;
		},
		changePassword: async (payload: ChangeAccountPasswordPayload) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/password",
				payload
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "passwordChanged",
						data: {}
					})
				);
			}
			return response;
		},
		requestResetPassword: async (
			payload: RequestAccountPasswordResetPayload
		) => {
			const response = await sdk.callAction<void>({
				actionName: "account/requestReset",
				payload
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "passwordResetRequested",
						data: {}
					})
				);
			}
			return response;
		},
		resetPassword: async (payload: ResetAccountPasswordPayload) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/reset",
				payload
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "passwordReset",
						data: {}
					})
				);
			}
			return response;
		},
		updateAccount: async (payload: UpdateAccountPayload) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/update",
				payload
			});

			if (!response.isError) {
				sdk.trigger(
					new Event({
						eventName: "accountUpdated",
						data: {
							account: response.data
						}
					})
				);
			}
			return response;
		},
		addAddress: async (payload: AddAccountAddressPayload) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/addAddress",
				payload
			});

			if (!response.isError) {
				const newAddress = response.data.addresses?.find(address =>
					addressesAreEqual(address, payload, false)
				);
				if (newAddress) {
					sdk.trigger(
						new Event({
							eventName: "accountAddressAdded",
							data: {
								address: newAddress
							}
						})
					);
				}
			}
			return response;
		},
		updateAddress: async (payload: UpdateAccountAddressPayload) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/updateAddress",
				payload
			});

			if (!response.isError) {
				const newAddress = response.data.addresses?.find(address =>
					addressesAreEqual(address, payload, true)
				);
				if (newAddress) {
					sdk.trigger(
						new Event({
							eventName: "accountAddressUpdated",
							data: {
								address: newAddress
							}
						})
					);
				}
			}
			return response;
		},
		removeAddress: async (payload: RemoveAccountAddressPayload) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/removeAddress",
				payload
			});

			if (!response.isError) {
				if (
					!response.data.addresses?.find(
						address => address.addressId === payload.addressId
					)
				) {
					sdk.trigger(
						new Event({
							eventName: "accountAddressRemoved",
							data: {
								addressId: payload.addressId
							}
						})
					);
				}
			}
			return response;
		},
		setDefaultBillingAddress: async (
			payload: SetDefaultAccountBillingAddressPayload
		) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/setDefaultBillingAddress",
				payload
			});

			if (!response.isError) {
				const address = response.data.addresses?.find(
					address => address.addressId === payload.addressId
				);
				if (address?.isDefaultBillingAddress) {
					sdk.trigger(
						new Event({
							eventName: "defaultBillingAddressSet",
							data: {
								address: address
							}
						})
					);
				}
			}
			return response;
		},
		setDefaultShippingAddress: async (
			payload: SetDefaultAccountShippingAddressPayload
		) => {
			const response = await sdk.callAction<Account>({
				actionName: "account/setDefaultShippingAddress",
				payload
			});

			if (!response.isError) {
				const address = response.data.addresses?.find(
					address => address.addressId === payload.addressId
				);
				if (address?.isDefaultShippingAddress) {
					sdk.trigger(
						new Event({
							eventName: "defaultShippingAddressSet",
							data: {
								address: address
							}
						})
					);
				}
			}
			return response;
		}
	};
};
