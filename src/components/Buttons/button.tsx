import React, { FC, useMemo } from 'react';
interface ButtonInterface {
  btnName: string;
  className?: string;
  type?: 'button' | 'submit'; // optional prop for button type (default is'submit')
  isDisabled?: boolean; // optional prop for button disabled state (default is false)
  btnType?: 'primary' | 'secondary';
}
const Button: FC<ButtonInterface> = ({
  btnName,
  className,
  type,
  isDisabled,
  btnType = 'primary',
}: ButtonInterface) => {
  const btnClass = useMemo(() => {
    return btnType === 'primary' ? ` bg-green-g1 text-white` : 'border border-green-g1 text-gray-g1';
  }, [btnType]);
  return (
    <button
      className={`${btnClass} ${className} px-6 py-2.5 text-white rounded-r-full rounded-l-full font-extrabold text-xl`}
      type={type || 'button'}
      disabled={!!isDisabled}
    >
      {btnName}
    </button>
  );
};

export default Button;
