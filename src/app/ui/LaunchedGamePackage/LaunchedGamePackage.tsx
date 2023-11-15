'use client'
import classes from './style.module.scss'
import React, {useEffect, useState} from 'react';
import {GameLibraryStore} from "@/app/store";
import clsx from "clsx";
import {observer} from "mobx-react";

const LOAD_ANIMATIONS = [classes.load1, classes.load2, classes.load3, classes.load4]

export type LaunchedGamePackageProps = {}

const LaunchedGamePackage = observer((props: LaunchedGamePackageProps) => {
  const {launchedGame} = GameLibraryStore;

  const [state, setState] = useState({
    gameLoaded: false,
    // Selected animation
    loadAnimationStyle: '',
  });

  const {gameLoaded, loadAnimationStyle} = state;

  useEffect(() => {
    const random = Math.floor(Math.random() * LOAD_ANIMATIONS.length);

    setState(p => ({...p, loadAnimationStyle: LOAD_ANIMATIONS[random]}));
    setTimeout(() => {
      setState(p => ({...p, gameLoaded: true}));
    }, 4000);
  }, []);

  return (
      <div
        className={clsx(
          'absolute inset-0 z-10',
          loadAnimationStyle,
          {
            ['cursor-progress']: !gameLoaded
          }
        )}
      >
        {gameLoaded && (
          <iframe
            src={launchedGame?.gameUrl}
            width={'100%'}
            height={'100%'}
          />
        )}
      </div>
  );
});

export default LaunchedGamePackage;