'use client'
import React from 'react';
import LibraryGameWindowLauncher from "@/app/library/ui/LibraryGameWindow/LibraryGameWindowLauncher";
import {observer} from "mobx-react";
import {gameLibraryStore} from "@/app/store";

export type LibraryGameWindowProps = {}

const LibraryGameWindow = observer((props: LibraryGameWindowProps) => {
  const {selectedGame} = gameLibraryStore;

  return (
    <div
      className={'flex flex-col grow bg-top bg-cover'}
      style={{
        backgroundImage: `url('${selectedGame?.backgroundUrl}')`
      }}
    >
      <LibraryGameWindowLauncher />
    </div>
  );
});

export default LibraryGameWindow;