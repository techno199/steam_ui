'use client'
import React, {useState} from 'react';
import Button from "@/ui/Button/Button";
import {observer} from "mobx-react";
import {AnimatePresence, motion} from "framer-motion";
import {gameLibraryStore} from "@/app/store";
import Play from '/public/steam/play.svg';
import TimePlayed from '/public/steam/time_played.svg';
import {LibraryApp} from "@/../games.config";
import clsx from "clsx";

export type LibraryGameWindowLauncherProps = {}

const LibraryGameWindowLauncher = observer((props: LibraryGameWindowLauncherProps) => {
  const selectedApp = gameLibraryStore.selectedApp as LibraryApp;

  const handleLaunch = () => {
    gameLibraryStore.launchedApp = selectedApp;
  }

  return (
    <div
      className={'flex flex-col grow bg-top bg-cover'}
      style={{
        backgroundImage: `url('${selectedApp?.backgroundUrl}')`
      }}
    >
      <div className={'flex flex-col grow pt-[250px]'}>
        <div className={clsx(
          'flex flex-col grow p-4 backdrop-blur bg-steam-primary/50 text-steam-accent-2/80 text-sm',
          'bg-gradient-to-b from-transparent via-steam-secondary/90 to-steam-secondary'
        )}>
          <AnimatePresence mode={'popLayout'}>
            <motion.div
              key={selectedApp?.name}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{type: 'tween', duration: .4}}
              className={'flex flex-col gap-4'}
            >
              {/* 1st ROW */}
              <div className={'flex items-center gap-8'}>
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
                    <span className={'text-[13px]'}>{selectedApp?.playTime} hours</span>
                  </div>
                </div>
              </div>

              <div className={'whitespace-pre'}>
                {selectedApp?.description}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

export default LibraryGameWindowLauncher;