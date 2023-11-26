'use client'
import React from 'react';
import {gameLibraryStore} from "@/app/store";
import Window from "@/ui/Window/Window";
import LaunchedGamePackage from "@/app/library/ui/LaunchedGamePackage/LaunchedGamePackage";
import {observer} from "mobx-react";

export type LaunchedGameWindowProps = {}

const LaunchedGameWindow = observer((props: LaunchedGameWindowProps) => {
  const {launchedApp} = gameLibraryStore;

  const handleCloseGame = () => {
    gameLibraryStore.launchedApp = null;
  }

  return (
    <>
      {launchedApp && (
        <Window onClose={handleCloseGame}>
          <LaunchedGamePackage />
        </Window>
      )}
    </>
  );
});

export default LaunchedGameWindow;