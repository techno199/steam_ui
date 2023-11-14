'use client'
import classes from './style.module.scss'
import React, {useEffect, useState} from 'react';
import {GameLibraryStore} from "@/app/store";
import clsx from "clsx";
import {observer} from "mobx-react";

export type LaunchedGamePackageProps = {}

const LaunchedGamePackage = observer((props: LaunchedGamePackageProps) => {
  const {launchedGame} = GameLibraryStore;

  const [state, setState] = useState({
    gameLoaded: false,
    loadAnimationStyle: ''
  });

  const {gameLoaded, loadAnimationStyle} = state;

  useEffect(() => {
    if (launchedGame) {
      const styles = [classes.load1, classes.load2, classes.load3]
      const random = Math.floor(Math.random() * styles.length);

      setState(p => ({...p, loadAnimationStyle: styles[random]}));
      setTimeout(() => {
        setState(p => ({...p, gameLoaded: true}));
      }, 4000)
    }
  }, [launchedGame])

  return (
    <>
      {launchedGame && (
        <div
          className={clsx(
            'fixed inset-0 z-10',
            loadAnimationStyle,
            {
              ['cursor-progress']: launchedGame && !gameLoaded
            }
          )}
        >
          {gameLoaded && (
            <iframe
              src={launchedGame.gameUrl}
              width={'100%'}
              height={'100%'}
            />
          )}
        </div>
      )}
    </>
  );
});

export default LaunchedGamePackage;