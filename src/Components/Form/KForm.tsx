import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type TFormConfig = {
	resolver?: any;
	defaultValues?: Record<string, any>;
};

type TFormProps = {
	children: React.ReactNode;
	onSubmit: SubmitHandler<FieldValues>;
	resetForm?: boolean;
} & TFormConfig;

const KForm = ({ children, onSubmit, resolver, resetForm, defaultValues }: TFormProps) => {
	const formConfig: TFormConfig = {};

	if (resolver) {
		formConfig.resolver = resolver;
	}

	if (defaultValues) {
		formConfig['defaultValues'] = defaultValues;
	}

	const methods = useForm(formConfig);
	const { handleSubmit, reset } = methods;
	const submit: SubmitHandler<FieldValues> = (data) => {
		onSubmit(data);
		resetForm === true && reset();
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(submit)}>{children}</form>
		</FormProvider>
	);
};

export default KForm;
