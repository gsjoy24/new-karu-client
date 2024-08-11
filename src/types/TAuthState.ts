import { TProduct } from './product';

export type TUser = {
	id: string;
	email: string;
	iat: number;
	exp: number;
};
export type TAuthState = {
	user: null | TUser;
	token: null | string;
};

export type TUserName = {
	firstName: string;
	lastName: string;
};

export type TCart = {
	_id?: string;
	product: TProduct;
	quantity: number;
};

export interface TUserProfile {
	_id?: string;
	name: TUserName;
	full_name?: string;
	email: string;
	isEmailConfirmed: boolean;
	password: string;
	cart?: TCart[];

	courier_address?: string;
	city?: string;
	district?: string;
	postal_code?: string;
	mobile_number?: string;

	orders?: string[];
	status?: 'active' | 'blocked';
	isDeleted: boolean;
}
