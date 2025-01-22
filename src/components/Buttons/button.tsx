import React, { FC, useMemo } from 'react';
interface ButtonInterface {
  btnName: string;
  className?: string;
  type?: 'button' | 'submit'; // optional prop for button type (default is'submit')
  isDisabled?: boolean; // optional prop for button disabled state (default is false)
  btnType?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: FC<ButtonInterface> = ({
  btnName,
  className,
  type,
  isDisabled,
  btnType = 'primary',
  onClick,
}: ButtonInterface) => {
  const btnClass = useMemo(() => {
    return btnType === 'primary'
      ? `border bg-custom-primary text-white hover:text-custom-primary hover:border-custom-primary after:bg-gray-w2`
      : 'border border-custom-primary text-custom-primary  hover:text-white after:bg-custom-primary after:text-white';
  }, [className, btnType]);
  return (
    <button
      className={`${btnClass} ${className} hover-button relative z-10  overflow-hidden capitalize px-6 py-2.5 rounded-r-full rounded-l-full font-extrabold text-xl`}
      type={type || 'button'}
      disabled={!!isDisabled}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
