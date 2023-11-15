import React, {HTMLAttributes, ReactNode} from 'react';
import clsx from "clsx";

export type TextFieldProps = HTMLAttributes<HTMLInputElement> & {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputProps?: HTMLAttributes<HTMLInputElement>;
}

const TextField = (props: TextFieldProps) => {
  const { placeholder, startAdornment, endAdornment, inputProps, ...rest } = props;

  return (
    <div className={'group flex items-center gap-2 p-2 bg-steam-secondary-400'}>
      {startAdornment && (
        <div>
          {startAdornment}
        </div>
      )}
      <input
        className={clsx(
          'outline-none bg-transparent text-steam-accent-2 text-sm',
          'placeholder:italic placeholder:text-transparent group-hover:placeholder:text-steam-accent-1 placeholder:duration-200'
        )}
        {...rest}
        {...inputProps}
      />
      {endAdornment}
    </div>
  );
};

export default TextField;