'use client'
import React from 'react';
import SidebarGameListSearch from "@/app/ui/Sidebar/SidebarGameListSearch";
import {GAMES_CONFIG, GamesConfigItem} from "../../../../games.config";
import Image from "next/image";
import {GameLibraryStore} from "@/app/store";
import clsx from "clsx";
import {observer} from 'mobx-react';

export type SidebarGameListProps = {}

const SidebarGameList = observer((props: SidebarGameListProps) => {
  const {selectedGame} = GameLibraryStore;

  const handleGameClick = (game: GamesConfigItem) => () => {
    GameLibraryStore.selectedGame = game;
  }

  return (
    <div className={'bg-steam-secondary-300 grow'}>
      <SidebarGameListSearch />

      <div className={'flex flex-col py-2'}>
        {GAMES_CONFIG.map(ci => (
          <span
            key={ci.name}
            className={clsx(
              'flex items-center gap-2 px-8 py-0.5 text-xs cursor-pointer whitespace-nowrap', {
                ['hover:bg-steam-accent-5']: ci !== selectedGame,
                ['bg-steam-accent-6 hover:bg-steam-accent-7 text-steam-accent-2']: ci.name === selectedGame.name
              }
            )}
            onClick={handleGameClick(ci)}
          >
            <div className={'relative w-5 h-5 shrink-0'}>
              <Image alt={''} src={ci.logoUrl} fill />
            </div>

            {ci.name}
          </span>
        ))}
      </div>
    </div>
  );
});

export default SidebarGameList;