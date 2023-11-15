import React, {HTMLAttributes, PropsWithChildren} from 'react';
import clsx from "clsx";
import Button from "@/ui/Button/Button";
import {GameLibraryStore} from "@/app/store";
import {observer} from "mobx-react";
import Close from '/public/steam/close_window.svg';

export type WindowProps = HTMLAttributes<HTMLDivElement> & {
  onClose?: () => any;
};

const Window = observer((props: WindowProps) => {
  const { children, className, onClose, ...rest } = props;
  const {selectedGame} = GameLibraryStore;

  return (
    <div
      className={clsx(
        className,
        'absolute inset-0 flex flex-col z-50 bg-steam-secondary text-steam-accent-2',
      )}
      {...rest}
    >
      <div className={'flex justify-between bg-steam-primary'}>
        <h1 className={'p-2 text-xs'}>{selectedGame?.name}</h1>

        <div className={'flex'}>
          <Button onClick={onClose}>
            <Close className={'!w-[.7em] !h-[.7em]'} />
          </Button>
        </div>
      </div>

      <div className={'relative grow'}>
        {children}
      </div>
    </div>
  );
});

export default Window;