'use client'
import React from 'react';
import SidebarGameListSearch from "@/app/ui/Sidebar/SidebarGameListSearch";
import {GAMES_CONFIG} from "games.config";
import Image from "next/image";
import {LibrarySignal} from "@/app/signal";
import clsx from "clsx";

export type SidebarGameListProps = {}

const SidebarGameList = (props: SidebarGameListProps) => {
  const selectedGame = LibrarySignal.value;

  return (
    <div className={'bg-steam-secondary-300 grow'}>
      <SidebarGameListSearch />

      <div className={'flex flex-col py-2'}>
        {GAMES_CONFIG.map(ci => (
          <span key={ci.name} className={clsx(
            'flex items-center gap-2 px-8 py-0.5 text-xs cursor-pointer', {
              ['hover:bg-steam-accent-5']: ci !== selectedGame,
              ['bg-steam-accent-6 hover:bg-steam-accent-7 text-steam-accent-2']: ci === selectedGame
            }
          )}>
            <div className={'relative w-5 h-5'}>
              <Image src={ci.logoUrl} fill />
            </div>

            {ci.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SidebarGameList;