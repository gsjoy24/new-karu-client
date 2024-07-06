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
