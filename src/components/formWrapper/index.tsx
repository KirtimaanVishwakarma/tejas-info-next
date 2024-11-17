import React from 'react';
import Input from '../formInputs/input';
import Textarea from '../formInputs/textarea';
import { FormObjects } from '@/constants/constant';

interface FormWrapper {
  formObject: Array<FormObjects>;
}
const FormWrapper = ({ formObject }: FormWrapper) => {
  return (
    <>
      {formObject?.map((formValues: FormObjects) => {
        if (formValues.type === 'textarea') {
          return <Textarea key={formValues.id} {...formValues} />;
        }
        return <Input key={formValues.id} {...formValues} />;
      })}
    </>
  );
};

export default FormWrapper;
