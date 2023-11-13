'use client'
import React, {HTMLAttributes} from 'react';
import clsx from "clsx";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: 'transparent' | 'secondary' | 'accent-1' | 'accent-3' | 'accent-4' | 'accent-8';
}

const Button = (props: ButtonProps) => {
  const { className, color = 'transparent', ...rest } = props;

  return (
    <button
      className={clsx(className, `relative flex justify-center items-center px-4 py-1 rounded-sm duration-200 overflow-hidden outline-none`, {
        ['hover:bg-[rgb(255,255,255,.2)] hover:text-steam-accent-2']: color === 'transparent',
        ['bg-steam-secondary hover:bg-steam-secondary-200 text-steam-accent-2']: color === 'secondary',
        ['!bg-steam-accent-1/10 hover:!bg-steam-accent-1/50']: color === 'accent-1',
        ['bg-steam-accent-3 hover:bg-steam-accent-3-600 text-steam-accent-2']: color === 'accent-3',
        ['bg-steam-accent-4 hover:bg-steam-accent-4-500 text-steam-accent-2']: color === 'accent-4',
        ['bg-steam-accent-8 hover:bg-steam-accent-8-light text-steam-accent-2']: color === 'accent-8'
      })}
      {...rest}
    />
  );
};

export default Button;