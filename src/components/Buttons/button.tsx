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
      ? ` bg-green-g1 text-white`
      : 'border border-green-g1 !text-gray-b1';
  }, []);
  return (
    <button
      className={`${btnClass} ${className} capitalize px-6 py-2.5 text-white rounded-r-full rounded-l-full font-extrabold text-xl`}
      type={type || 'button'}
      disabled={!!isDisabled}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
