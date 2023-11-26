'use client'
import React from 'react';
import LibraryGameWindowLauncher from "@/app/library/ui/LibraryGameWindow/LibraryGameWindowLauncher";
import {gameLibraryStore, steamStore} from "@/app/store";
import {AppCategory, LibraryApp} from "@/../games.config";
import {observer} from "mobx-react";
import LibraryCategoryWindow from "@/app/library/ui/LibraryGameWindow/LibraryCategoryWindow";

export type LibraryGameWindowProps = {}

const LibraryGameWindow = observer((props: LibraryGameWindowProps) => {
  const {selectedApp} = gameLibraryStore;

  if (!selectedApp) {
    return 'No selected app available.';
  }

  if ((selectedApp as AppCategory)?.isCategory) {
    return (
      <LibraryCategoryWindow />
    )
  } else {
    return (
      <LibraryGameWindowLauncher />
    );
  }
});

export default LibraryGameWindow;