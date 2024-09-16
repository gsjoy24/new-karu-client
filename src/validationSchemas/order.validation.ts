import { z } from 'zod';

export const OrderValidation = z.object({
	email: z
		.string()
		.email({
			message: 'Enter a valid email address!'
		})
		.optional(),
	password: z
		.string()
		.min(8, {
			message: 'Password must be at least 8 characters long!'
		})
		.optional(),

	name: z.string({
		required_error: 'Name is required!'
	}),
	phone: z
		.string({
			required_error: 'Phone is required!'
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
		),
	address: z.string({
		required_error: 'Address is required!'
	}),
	district: z.string({
		required_error: 'District is required!'
	}),
	city: z.string({
		required_error: 'City is required!'
	})
});
