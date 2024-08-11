import { z } from 'zod';

export const UserAddressSchema = z.object({
	courier_address: z.string().min(3, {
		message: 'Courier Address should be at least 3 characters long!'
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
	postal_code: z.string().optional(),
	mobile_number: z.string().refine(
		(value) => {
			// at least 10 digits and at most 14 digits and only digits are allowed
			const regex = /^(\+?88)?01[0-9]{9}$/;
			return regex.test(value);
		},
		{
			message: 'Enter a valid phone number!'
		}
	)
});
