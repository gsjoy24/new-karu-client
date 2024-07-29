import { SxProps, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type KInputProps = {
	label?: string;
	placeholder?: string;
	type?: string;
	name: string;
	sx?: SxProps;
	ariaLabel?: string;
	multiline?: boolean;
	rows?: number;
};

const KInput = ({ label, type = 'text', ariaLabel, name, placeholder, sx, multiline = false, rows }: KInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<div className='w-full'>
					<label htmlFor={name} className='text-sm font-medium text-gray-700'>
						{label}
					</label>
					<TextField
						{...field}
						aria-label={ariaLabel ?? placeholder}
						inputProps={{ autoComplete: name }}
						sx={{ ...sx, width: '100%', borderRadius: '5px' }}
						placeholder={placeholder ?? label}
						minRows={rows ?? 6}
						variant='outlined'
						multiline={multiline}
						type={type}
						value={field.value ?? ''}
						size='small'
						fullWidth
						error={!!error?.message}
						helperText={
							error?.message && (
								<span className='flex items-center gap-1 relative right-3'>
									<span className='inline-block'>
										<CiWarning size={16} />
									</span>{' '}
									{error?.message}
								</span>
							)
						}
					/>
				</div>
			)}
		/>
	);
};

export default KInput;
