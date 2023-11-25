'use client'
import React, {useState} from 'react';
import Button from "@/ui/Button/Button";
import {observer} from "mobx-react";
import {AnimatePresence, motion} from "framer-motion";
import {gameLibraryStore} from "@/app/store";
import Play from '/public/steam/play.svg';
import TimePlayed from '/public/steam/time_played.svg';

export type LibraryGameWindowLauncherProps = {}

const LibraryGameWindowLauncher = observer((props: LibraryGameWindowLauncherProps) => {
  const {selectedGame} = gameLibraryStore;

  const handleLaunch = () => {
    gameLibraryStore.launchedGame = selectedGame;
  }

  return (
      <div className={'flex flex-col px-0.5 grow pt-[250px]'}>
        <div className={'flex flex-col grow p-4 backdrop-blur bg-steam-primary/50'}>
          <AnimatePresence mode={'popLayout'}>
            <motion.div
              key={selectedGame?.name}
              initial={{y: 10, opacity: 0, }}
              animate={{y: 0, opacity: 1}}
              transition={{type: 'tween', duration: .4}}
            >
              {/* 1st ROW */}
              <div className={'flex items-center gap-8 text-steam-accent-2/80'}>
                <Button
                  color={'accent-8'}
                  className={'gap-2 !px-14 py-2.5 !text-lg font-medium'}
                  onClick={handleLaunch}
                >
                  <Play className={'w-5 text-steam-accent-2/50'} />
                  PLAY
                </Button>

                {/* Last launch */}
                <div className={'flex flex-col leading-tight'}>
                  <span className={'text-sm uppercase'}>Last Played</span>
                  <span className={'text-[13px]'}>Today</span>
                </div>

                {/* Time played */}
                <div className={'flex gap-2'}>
                  <TimePlayed className={'!w-6 !h-auto'} />
                  <div className={'flex flex-col leading-tight'}>
                    <span className={'text-sm uppercase'}>Play time</span>
                    <span className={'text-[13px]'}>{selectedGame?.playTime} hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
  );
});

export default LibraryGameWindowLauncher;