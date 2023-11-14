'use client'
import React, {useState} from 'react';
import Button from "@/ui/Button/Button";
import {observer} from "mobx-react";
import {AnimatePresence, motion} from "framer-motion";
import {GameLibraryStore} from "@/app/store";
import Play from '/public/steam/play.svg';

export type LibraryGameWindowLauncherProps = {}

const LibraryGameWindowLauncher = observer((props: LibraryGameWindowLauncherProps) => {
  const {selectedGame} = GameLibraryStore;

  const handleLaunch = () => {
    GameLibraryStore.launchedGame = selectedGame;
  }

  return (
      <div className={'flex flex-col px-0.5 grow pt-[250px]'}>
        <div className={'flex flex-col grow p-4 backdrop-blur bg-steam-primary/50'}>
          <AnimatePresence mode={'popLayout'}>
            <motion.div
              key={selectedGame?.name}
              initial={{y: 20, opacity: 0, }}
              animate={{y: 0, opacity: 1}}
              exit={{y: -5, opacity: 0}}
              transition={{type: 'just'}}
            >
              {/* 1st ROW */}
              <div className={'flex gap-4'}>
                {/*<a href={selectedGame.gameUrl} target={'_blank'}>*/}
                  <Button
                    color={'accent-8'}
                    className={'gap-2 !px-14 py-2.5 !text-lg font-medium'}
                    onClick={handleLaunch}
                  >
                    <Play className={'w-5 text-steam-accent-2/50'} />
                    PLAY
                  </Button>
                {/*</a>*/}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
  );
});

export default LibraryGameWindowLauncher;