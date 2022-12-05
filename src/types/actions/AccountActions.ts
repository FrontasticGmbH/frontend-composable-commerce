import { Account } from "@commercetools/frontend-domain-types/account/Account";
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

type GetAccountAction = () => Promise<{
	loggedIn: boolean;
	account?: Account;
} | Error>;

type LoginAccountAction = (payload: LoginAccountPayload) => Promise<Account | Error>;

type LogoutAccountAction = () => Promise<void | Error>;

type RegisterAccountAction = (
	payload: RegisterAccountPayload,
) => Promise<Account | Error>;

type ConfirmAccountAction = (
	payload: ConfirmAccountPayload,
) => Promise<Account | Error>;

type RequestAccountConfirmationEmailAction = (
	payload: RequestAccountConfirmationEmailPayload,
) => Promise<void | Error>;

type ChangeAccountPasswordAction = (
	payload: ChangeAccountPasswordPayload,
) => Promise<Account | Error>;

type RequestAccountPasswordResetAction = (
	payload: RequestAccountPasswordResetPayload,
) => Promise<void | Error>;

type ResetAccountPasswordAction = (
	payload: ResetAccountPasswordPayload,
) => Promise<Account | Error>;

type UpdateAccountAction = (payload: UpdateAccountPayload) => Promise<Account | Error>;

type AddAccountAddressAction = (
	payload: AddAccountAddressPayload,
) => Promise<Account | Error>;

type UpdateAccountAddressAction = (
	payload: UpdateAccountAddressPayload,
) => Promise<Account | Error>;

type RemoveAccountAddressAction = (
	payload: RemoveAccountAddressPayload,
) => Promise<Account | Error>;

type SetDefaultAccountBillingAddressAction = (
	payload: SetDefaultAccountBillingAddressPayload,
) => Promise<Account | Error>;

type SetDefaultAccountShippingAddressAction = (
	payload: SetDefaultAccountShippingAddressPayload,
) => Promise<Account | Error>;

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
