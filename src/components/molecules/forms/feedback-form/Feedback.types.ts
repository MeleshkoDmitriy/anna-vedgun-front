export type TFeedbackFormErrors = {
  message?: string;
};

export type FormState = {
  errors: TFeedbackFormErrors;
};

export const initialFormState: FormState = {
  errors: {},
};
