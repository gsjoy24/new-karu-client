import { jwtDecode } from 'jwt-decode';
const verifyToken = (token: string) => {
	if (typeof token !== 'string') return null;
	return jwtDecode(token);
};

export default verifyToken;
