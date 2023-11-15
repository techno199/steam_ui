'use client'
import React from 'react';
import SidebarGameListSearch from "@/app/library/ui/Sidebar/SidebarGameListSearch";
import {GAMES_CONFIG, GamesConfigItem} from "games.config";
import Image from "next/image";
import {GameLibraryStore} from "@/app/store";
import clsx from "clsx";
import {observer} from 'mobx-react';
import {useFormik} from "formik";
import {object} from "zod";

export type SidebarGameListProps = {}

const SidebarGameList = observer((props: SidebarGameListProps) => {
  const {selectedGame} = GameLibraryStore;

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: () => {

    }
  })

  const handleGameClick = (game: GamesConfigItem) => () => {
    GameLibraryStore.selectedGame = game;
  }

  return (
    <div className={'bg-steam-secondary-300 grow'}>
      <SidebarGameListSearch formik={formik} />

      <div className={'flex flex-col py-2'}>
        {GAMES_CONFIG.filter(ci => ci.name.toLowerCase().includes(formik.values.search.toLowerCase())).map(ci => (
          <GameTitle
            key={ci.name}
            gameConfig={ci}
            selected={ci.name === selectedGame?.name}
            onClick={handleGameClick(ci)}
          />
        ))}
      </div>
    </div>
  );
});

export default SidebarGameList;

const GameTitle = ({gameConfig, selected = false, onClick}) => {
  return (
    <div className={'relative h-6 overflow-hidden hover:overflow-visible'}>
      <span
        className={clsx(
          'flex items-center gap-2 min-w-full pl-8 pr-2 py-0.5 text-xs cursor-pointer whitespace-nowrap hover:absolute', {
            ['hover:bg-steam-accent-5']: !selected,
            ['bg-steam-accent-6 hover:bg-steam-accent-7 text-steam-accent-2']: selected
          }
        )}
        onClick={onClick}
      >
        <div className={'relative w-5 h-5 shrink-0'}>
          <Image alt={''} src={gameConfig.logoUrl} fill/>
        </div>

        {gameConfig.name}
      </span>
    </div>
  )
}