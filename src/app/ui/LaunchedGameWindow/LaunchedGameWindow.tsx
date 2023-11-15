'use client'
import React from 'react';
import {GameLibraryStore} from "@/app/store";
import Window from "@/ui/Window/Window";
import LaunchedGamePackage from "@/app/library/ui/LaunchedGamePackage/LaunchedGamePackage";
import {observer} from "mobx-react";

export type LaunchedGameWindowProps = {}

const LaunchedGameWindow = observer((props: LaunchedGameWindowProps) => {
  const {launchedGame} = GameLibraryStore;

  const handleCloseGame = () => {
    GameLibraryStore.launchedGame = null;
  }

  return (
    <>
      {launchedGame && (
        <Window onClose={handleCloseGame}>
          <LaunchedGamePackage />
        </Window>
      )}
    </>
  );
});

export default LaunchedGameWindow;