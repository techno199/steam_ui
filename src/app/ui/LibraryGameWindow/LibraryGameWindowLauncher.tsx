'use client'
import React from 'react';
import Button from "@/ui/Button/Button";
import {GameLibraryStore, LibrarySignal} from "@/app/signal";
import {observer} from "mobx-react";
import {motion} from "framer-motion";

export type LibraryGameWindowLauncherProps = {}

const LibraryGameWindowLauncher = observer((props: LibraryGameWindowLauncherProps) => {
  const {selectedGame} = GameLibraryStore;

  return (
    <motion.div
      initial={{y: 20}}
      animate={{y: 0}}
      transition={{type: 'just'}}
      className={'flex flex-col px-1 grow mt-[300px]'}
    >
      <div className={'flex flex-col grow px-4 backdrop-blur'}>
        {/* 1st ROW */}
        <div className={'flex gap-4'}>
          <a href={selectedGame.gameUrl} target={'_blank'}>
            <Button color={'accent-8'} className={'px-14 py-2.5 !text-lg font-medium'}>
              PLAY
            </Button>
          </a>
        </div>

      </div>
    </motion.div>
  );
});

export default LibraryGameWindowLauncher;