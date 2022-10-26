import { Account } from "@commercetools/domain-types/account/Account";
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
	error?: Error;
}>;

type LoginAccountAction = (payload: LoginAccountPayload) => Promise<Account>;

type LogoutAccountAction = () => Promise<void>;

type RegisterAccountAction = (
	payload: RegisterAccountPayload,
) => Promise<Account>;

type ConfirmAccountAction = (
	payload: ConfirmAccountPayload,
) => Promise<Account>;

type RequestAccountConfirmationEmailAction = (
	payload: RequestAccountConfirmationEmailPayload,
) => Promise<void>;

type ChangeAccountPasswordAction = (
	payload: ChangeAccountPasswordPayload,
) => Promise<Account>;

type RequestAccountPasswordResetAction = (
	payload: RequestAccountPasswordResetPayload,
) => Promise<void>;

type ResetAccountPasswordAction = (
	payload: ResetAccountPasswordPayload,
) => Promise<Account>;

type UpdateAccountAction = (payload: UpdateAccountPayload) => Promise<Account>;

type AddAccountAddressAction = (
	payload: AddAccountAddressPayload,
) => Promise<Account>;

type UpdateAccountAddressAction = (
	payload: UpdateAccountAddressPayload,
) => Promise<Account>;

type RemoveAccountAddressAction = (
	payload: RemoveAccountAddressPayload,
) => Promise<Account>;

type SetDefaultAccountBillingAddressAction = (
	payload: SetDefaultAccountBillingAddressPayload,
) => Promise<Account>;

type SetDefaultAccountShippingAddressAction = (
	payload: SetDefaultAccountShippingAddressPayload,
) => Promise<Account>;

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
