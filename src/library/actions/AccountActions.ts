import { rememberMeCookie, SDK } from "@commercetools-frontend/sdk";
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


export type AccountActions = {
	getAccount: GetAccountAction,
	login: LoginAccountAction,
	logout: LogoutAccountAction,
	register: RegisterAccountAction,
	confirm: ConfirmAccountAction,
	requestConfirmationEmail: RequestAccountConfirmationEmailAction,
	changePassword: ChangeAccountPasswordAction,
	requestResetPassword: RequestAccountPasswordResetAction,
	resetPassword: ResetAccountPasswordAction,
	updateAccount: UpdateAccountAction,
	addAddress: AddAccountAddressAction,
	updateAddress: UpdateAccountAddressAction,
	removeAddress: RemoveAccountAddressAction,
	setDefaultBillingAddress: SetDefaultAccountBillingAddressAction,
	setDefaultShippingAddress: SetDefaultAccountShippingAddressAction,
}

export const getAccountActions: (sdk: SDK) =>
	AccountActions = (sdk: SDK) => {
		return {
			getAccount: async () => {
				const result = await sdk.callAction("account/getAccount", {});
				const account = (result as any)?.data?.account || (result as any)?.data;

				if (account?.accountId && account?.confirmed) {
					return { account, loggedIn: true };
				}

				return {
					loggedIn: false,
					account: undefined,
					error: (result as any).error,
				};
			},
			login: async (payload: LoginAccountPayload) => {
				const remember = payload.remember;
				payload.remember = undefined;

				const result: any = sdk.callAction("account/login", payload);

				if (remember) {
					rememberMeCookie.set(true);
				}

				return result;
			},
			logout: async () => {
				await sdk.callAction("account/logout", {});
				rememberMeCookie.remove();
			},
			register: (payload: RegisterAccountPayload) => {
				return sdk.callAction("account/register", payload);
			},
			confirm: (payload: ConfirmAccountPayload) => {
				return sdk.callAction("account/confirm", payload);
			},
			requestConfirmationEmail: (payload: RequestAccountConfirmationEmailPayload) => {
				return sdk.callAction("account/requestConfirmationEmail", payload);
			},
			changePassword: (payload: ChangeAccountPasswordPayload) => {
				return sdk.callAction("account/password", payload);
			},
			requestResetPassword: (payload: RequestAccountPasswordResetPayload) => {
				return sdk.callAction("account/requestReset", payload);
			},
			resetPassword: (payload: ResetAccountPasswordPayload) => {
				return sdk.callAction("account/reset", payload);
			},
			updateAccount: (payload: UpdateAccountPayload) => {
				return sdk.callAction("account/update", payload);
			},
			addAddress: (payload: AddAccountAddressPayload) => {
				return sdk.callAction("account/addAddress", payload);
			},
			updateAddress: (payload: UpdateAccountAddressPayload) => {
				return sdk.callAction("account/updateAddress", payload);
			},
			removeAddress: (payload: RemoveAccountAddressPayload) => {
				return sdk.callAction("account/removeAddress", payload);
			},
			setDefaultBillingAddress: (payload: SetDefaultAccountBillingAddressPayload) => {
				return sdk.callAction("account/setDefaultBillingAddress", payload);
			},
			setDefaultShippingAddress: (payload: SetDefaultAccountShippingAddressPayload) => {
				return sdk.callAction("account/setDefaultShippingAddress", payload);
			}
		}
	}
