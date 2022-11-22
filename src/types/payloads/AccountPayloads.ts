import { Address } from "@commercetools-frontend/domain-types/account/Address";

type LoginAccountPayload = {
	email: string;
	password: string;
	remember?: boolean;
};

type RegisterAccountPayload = {
	account: {
		email: string;
		password: string;
		firstName?: string;
		lastName?: string;
		salutation?: string;
		birthdayYear?: number;
		birthdayMonth?: number;
		birthdayDay?: number;
		billingAddress?: Address;
		shippingAddress?: Address;
	};
};

type ConfirmAccountPayload = {
	token: string;
};

type RequestAccountConfirmationEmailPayload = {
	email: string;
	password: string;
};

type ChangeAccountPasswordPayload = {
	oldPassword: string;
	newPassword: string;
};

type RequestAccountPasswordResetPayload = {
	email: string;
};

type ResetAccountPasswordPayload = {
	token: string;
	newPassword: string;
};

type UpdateAccountPayload = {
	firstName?: string;
	lastName?: string;
	salutation?: string;
	birthdayYear?: number;
	birthdayMonth?: number;
	birthdayDay?: number;
};

type AddAccountAddressPayload = {
	address: Omit<Address, "addressId">;
};

type UpdateAccountAddressPayload = {
	address: Address;
};

type RemoveAccountAddressPayload = {
	addressId: string;
};

type SetDefaultAccountBillingAddressPayload = {
	addressId: string;
};

type SetDefaultAccountShippingAddressPayload = {
	addressId: string;
};

export {
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
};
