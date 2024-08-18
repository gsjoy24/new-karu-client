import { z } from 'zod';

export const LoginSchema = z.object({
	email: z
		.string({
			required_error: 'Email is required'
		})
		.email({
			message: 'Invalid email address'
		}),
	password: z
		.string({
			required_error: 'Password is required'
		})
		.min(6, {
			message: 'Password must be at least 6 characters long'
		})
});

export const RegisterSchema = z.object({
	name: z.object({
		firstName: z
			.string({
				required_error: 'First Name is required!',
				invalid_type_error: 'First Name should be a string!'
			})
			.min(2, { message: 'First Name should be at least 2 characters long!' })
			.max(20, {
				message: 'First Name should be at most 20 characters long!'
			}),
		lastName: z
			.string({
				required_error: 'Last Name is required!',
				invalid_type_error: 'Last Name should be a string!'
			})
			.min(2, {
				message: 'Last Name should be at least 2 characters long!'
			})
			.max(20, {
				message: 'Last Name should be at most 20 characters long!'
			})
	}),
	email: z
		.string({
			required_error: 'Email is required!'
		})
		.email({
			message: 'Invalid email!'
		}),
	password: z
		.string({
			required_error: 'Password is required!'
		})
		.refine(
			(data) => {
				const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
				return passwordRegex.test(data);
			},
			{
				message:
					'The password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.'
			}
		)
});

export const ChangePasswordSchema = z
	.object({
		oldPassword: z
			.string({
				required_error: 'Current Password is required!'
			})
			.min(8, {
				message: 'Password must be at least 8 characters long!'
			}),
		newPassword: z
			.string({
				required_error: 'Password is required!'
			})
			.refine(
				(data) => {
					const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
					return passwordRegex.test(data);
				},
				{
					message:
						'The password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.'
				}
			),
		confirmPassword: z
			.string({
				required_error: 'Password is required!'
			})
			.refine(
				(data) => {
					const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
					return passwordRegex.test(data);
				},
				{
					message:
						'The password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.'
				}
			)
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Passwords do not match!',
		path: ['confirmPassword']
	});

export const ForgotPasswordSchema = z.object({
	email: z
		.string({
			required_error: 'Email is required!'
		})
		.email({
			message: 'Invalid email!'
		})
});
