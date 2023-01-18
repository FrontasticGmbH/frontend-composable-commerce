import { Account } from "@commercetools/frontend-domain-types/account/Account";
import { SDKResponse } from "@commercetools/frontend-sdk";
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

type GetAccountActionReturn = {
    loggedIn: boolean;
    account?: Account;
};

type GetAccountAction = () => Promise<SDKResponse<GetAccountActionReturn>>;

type LoginAccountAction = (
    payload: LoginAccountPayload,
) => Promise<SDKResponse<Account>>;

type LogoutAccountAction = () => Promise<SDKResponse<void>>;

type RegisterAccountAction = (
    payload: RegisterAccountPayload,
) => Promise<SDKResponse<Account>>;

type ConfirmAccountAction = (
    payload: ConfirmAccountPayload,
) => Promise<SDKResponse<Account>>;

type RequestAccountConfirmationEmailAction = (
    payload: RequestAccountConfirmationEmailPayload,
) => Promise<SDKResponse<void>>;

type ChangeAccountPasswordAction = (
    payload: ChangeAccountPasswordPayload,
) => Promise<SDKResponse<Account>>;

type RequestAccountPasswordResetAction = (
    payload: RequestAccountPasswordResetPayload,
) => Promise<SDKResponse<void>>;

type ResetAccountPasswordAction = (
    payload: ResetAccountPasswordPayload,
) => Promise<SDKResponse<Account>>;

type UpdateAccountAction = (
    payload: UpdateAccountPayload,
) => Promise<SDKResponse<Account>>;

type AddAccountAddressAction = (
    payload: AddAccountAddressPayload,
) => Promise<SDKResponse<Account>>;

type UpdateAccountAddressAction = (
    payload: UpdateAccountAddressPayload,
) => Promise<SDKResponse<Account>>;

type RemoveAccountAddressAction = (
    payload: RemoveAccountAddressPayload,
) => Promise<SDKResponse<Account>>;

type SetDefaultAccountBillingAddressAction = (
    payload: SetDefaultAccountBillingAddressPayload,
) => Promise<SDKResponse<Account>>;

type SetDefaultAccountShippingAddressAction = (
    payload: SetDefaultAccountShippingAddressPayload,
) => Promise<SDKResponse<Account>>;

export {
    GetAccountActionReturn,
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
    SetDefaultAccountShippingAddressAction,
};
