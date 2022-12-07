import { Account } from "@commercetools/frontend-domain-types/account/Account";
import { sdk } from "@commercetools/frontend-sdk";
import {
	LoginAccountPayload,
	RegisterAccountPayload,
	ConfirmAccountPayload,
	RequestAccountConfirmationEmailPayload,
	ChangeAccountPasswordPayload,
	RequestAccountPasswordResetPayload,
	ResetAccountPasswordPayload,
	UpdateAccountPayload,
	AddAccountAddressPayload,
	UpdateAccountAddressPayload,
	RemoveAccountAddressPayload,
	SetDefaultAccountBillingAddressPayload,
	SetDefaultAccountShippingAddressPayload,
} from "../payloads/AccountPayloads";

type GetAccountAction = () => ReturnType<typeof sdk.callAction<{
	loggedIn: boolean;
	account?: Account;
}>>;

type LoginAccountAction = (payload: LoginAccountPayload) => ReturnType<typeof sdk.callAction<Account>>;

type LogoutAccountAction = () => ReturnType<typeof sdk.callAction<{}>>;

type RegisterAccountAction = (
	payload: RegisterAccountPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

type ConfirmAccountAction = (
	payload: ConfirmAccountPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

type RequestAccountConfirmationEmailAction = (
	payload: RequestAccountConfirmationEmailPayload,
) => ReturnType<typeof sdk.callAction<{}>>;

type ChangeAccountPasswordAction = (
	payload: ChangeAccountPasswordPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

type RequestAccountPasswordResetAction = (
	payload: RequestAccountPasswordResetPayload,
) => ReturnType<typeof sdk.callAction<{}>>;

type ResetAccountPasswordAction = (
	payload: ResetAccountPasswordPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

type UpdateAccountAction = (payload: UpdateAccountPayload) => Promise<Account | Error>;

type AddAccountAddressAction = (
	payload: AddAccountAddressPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

type UpdateAccountAddressAction = (
	payload: UpdateAccountAddressPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

type RemoveAccountAddressAction = (
	payload: RemoveAccountAddressPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

type SetDefaultAccountBillingAddressAction = (
	payload: SetDefaultAccountBillingAddressPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

type SetDefaultAccountShippingAddressAction = (
	payload: SetDefaultAccountShippingAddressPayload,
) => ReturnType<typeof sdk.callAction<Account>>;

export {
	GetAccountAction,
	LoginAccountAction,
	LogoutAccountAction,
	RegisterAccountAction,
	ConfirmAccountAction,
	RequestAccountConfirmationEmailAction,
	ChangeAccountPasswordAction,
	RequestAccountPasswordResetAction,
	ResetAccountPasswordAction,
	UpdateAccountAction,
	AddAccountAddressAction,
	UpdateAccountAddressAction,
	RemoveAccountAddressAction,
	SetDefaultAccountBillingAddressAction,
	SetDefaultAccountShippingAddressAction
};
