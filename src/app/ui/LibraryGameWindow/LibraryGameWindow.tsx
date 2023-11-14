'use client'
import React from 'react';
import LibraryGameWindowLauncher from "@/app/ui/LibraryGameWindow/LibraryGameWindowLauncher";
import {observer} from "mobx-react";
import {GameLibraryStore} from "src/app/store";

export type LibraryGameWindowProps = {}

const LibraryGameWindow = observer((props: LibraryGameWindowProps) => {
  const {selectedGame} = GameLibraryStore;

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
});

export default LibraryGameWindow;