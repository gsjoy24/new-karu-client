import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type TFormConfig = {
	resolver?: any;
	defaultValues?: Record<string, any>;
	resetForm?: boolean;
};

type TFormProps = {
	children: React.ReactNode;
	onSubmit: SubmitHandler<FieldValues>;
	styleClasses?: string;
} & TFormConfig;

const KForm = ({ children, onSubmit, resolver, defaultValues, styleClasses, resetForm }: TFormProps) => {
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
			<form onSubmit={handleSubmit(submit)} className={styleClasses}>
				{children}
			</form>
		</FormProvider>
	);
};

export default KForm;
