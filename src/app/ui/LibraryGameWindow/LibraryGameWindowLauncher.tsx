'use client'
import React from 'react';
import Button from "@/ui/Button/Button";
import {GameLibraryStore, LibrarySignal} from "@/app/signal";
import {observer} from "mobx-react";
import {AnimatePresence, motion} from "framer-motion";

export type LibraryGameWindowLauncherProps = {}

const LibraryGameWindowLauncher = observer((props: LibraryGameWindowLauncherProps) => {
  const {selectedGame} = GameLibraryStore;

  return (
      <div className={'flex flex-col px-1 grow pt-[300px]'}>
        <div className={'flex flex-col grow px-4 backdrop-blur'}>
          <AnimatePresence mode={'popLayout'}>
            <motion.div
              key={selectedGame.name}
              initial={{y: 20, opacity: 0, }}
              animate={{y: 0, opacity: 1}}
              exit={{y: -5, opacity: 0}}
              transition={{type: 'just'}}
            >
              {/* 1st ROW */}
              <div className={'flex gap-4'}>
                <a href={selectedGame.gameUrl} target={'_blank'}>
                  <Button color={'accent-8'} className={'!px-14 py-2.5 !text-lg font-medium'}>
                    PLAY
                  </Button>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
  );
});

export default LibraryGameWindowLauncher;