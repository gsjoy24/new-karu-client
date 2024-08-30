import { z } from 'zod';

export const UserAddressSchema = z.object({
	address: z
		.string({
			required_error: 'Address is required!'
		})
		.min(3, {
			message: 'Address should be at least 3 characters long!'
		}),
	city: z
		.string({
			required_error: 'City name is required!'
		})
		.min(3, {
			message: 'City name should be at least 3 characters long!'
		}),
	district: z
		.string({
			required_error: 'District name is required!'
		})
		.min(3, {
			message: 'District name should be at least 3 characters long!'
		})
		.optional(),
	mobile_number: z
		.string({
			required_error: 'Mobile number is required!'
		})
		.refine(
			(value) => {
				// at least 11 digits and at most 14 digits and only digits are allowed
				const regex = /^(\+?88)?01[0-9]{9}$/;
				return regex.test(value);
			},
			{
				message: 'Enter a valid phone number!'
			}
		)
});
