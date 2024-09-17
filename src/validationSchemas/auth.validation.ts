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
		.min(8, {
			message: 'Password must be at least 8 characters long'
		})
});

export const RegisterSchema = z.object({
	name: z.string({
		required_error: 'Name is required'
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
		.min(8, {
			message: 'Password must be at least 8 characters long!'
		})
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

export const ResetPassSchema = z.object({
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
});
