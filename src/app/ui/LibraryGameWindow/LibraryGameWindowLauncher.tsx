import React from 'react';
import Button from "@/ui/Button/Button";
import {LibrarySignal} from "@/app/signal";

export type LibraryGameWindowLauncherProps = {}

const LibraryGameWindowLauncher = (props: LibraryGameWindowLauncherProps) => {
  const selectedGame = LibrarySignal.value;

  return (
    <div className={'flex flex-col px-1 grow mt-[300px]'}>
      <div className={'flex flex-col grow px-4 backdrop-blur'}>
        {/* 1st ROW */}
        <div className={'flex gap-4'}>
          <a href={selectedGame.gameUrl} target={'_blank'}>
            <Button color={'accent-8'} className={'px-16 py-2.5 !text-lg font-medium'}>
              PLAY
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default LibraryGameWindowLauncher;