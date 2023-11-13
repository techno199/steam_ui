'use client'
import React from 'react';
import {LibrarySignal} from "@/app/signal";
import LibraryGameWindowLauncher from "@/app/ui/LibraryGameWindow/LibraryGameWindowLauncher";

export type LibraryGameWindowProps = {}

const LibraryGameWindow = (props: LibraryGameWindowProps) => {
  const selectedGame = LibrarySignal.value;

  return (
    <div
      className={'flex flex-col grow bg-top bg-cover'}
      style={{
        backgroundImage: `url('${selectedGame.backgroundUrl}')`
      }}
    >
      <LibraryGameWindowLauncher />
    </div>
  );
};

export default LibraryGameWindow;