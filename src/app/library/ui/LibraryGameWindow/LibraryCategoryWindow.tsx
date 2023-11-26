'use client'
import classes from './LibraryCategoryWindow.module.scss';
import React from 'react';
import {observer} from "mobx-react";
import {AppCategory} from "@/../games.config";
import {gameLibraryStore} from "@/app/store";
import clsx from "clsx";

export type LibraryCategoryWindowProps = {}

const LibraryCategoryWindow = observer((props: LibraryCategoryWindowProps) => {
  const selectedCategory = gameLibraryStore.selectedApp as AppCategory;

  const handleAppClick = app => () => {
    gameLibraryStore.selectedApp = app;
  }

  return (
    <div className={'grow'}>
      <div className={'grid grid-cols-[repeat(auto-fill,220px)] gap-8 p-10'}>
        {selectedCategory.apps.map((app) => {
          return (
            <div
              key={app.name}
              style={{
                perspective: '1000px',
                perspectiveOrigin: 'top'
              }}
            >
              <div
                className={clsx(
                  'h-[330px] bg-cover bg-center cursor-pointer shadow-[-3px_0px_20px_-4px_rgb(0_0_0/1)]',
                  'hover:shadow-[-3px_12px_22px_4px_rgb(0_0_0/1),0_8px_10px_-6px_rgb(0_0_0/1)]',
                  classes.rotate
                )}
                style={{
                  backgroundImage: `url('${app.backgroundUrl}')`
                }}
                onClick={handleAppClick(app)}
              >
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
});

export default LibraryCategoryWindow;