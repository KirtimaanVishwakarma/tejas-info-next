import { FormObjects } from '@/constants/constant';
import React from 'react';

const Input: React.FC<any> = ({
  id,
  label,
  form,
  placeholder,
  span,
  className,
}: FormObjects) => {
  return (
    <div className={`w-full ${span ? span : 'col-span-1'}`}>
      <div className={`flex flex-col gap-1`}>
        <label htmlFor={id} className='text-gray-g3 font-semibold'>
          {label || ''}
          {form?.required && <span className='text-red-600'>*</span>}
        </label>
        <input
          type='text'
          id={id}
          name={id}
          placeholder={placeholder || ''}
          required={!!form?.required}
          className={`outline-none bg-gray-w1 p-4 rounded-md placeholder:text-gray-g1 placeholder:font-medium ${
            className || ''
          }`}
        />
      </div>
    </div>
  );
};

export default Input;
