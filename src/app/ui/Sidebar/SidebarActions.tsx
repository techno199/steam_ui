'use client'
import React from 'react';
import Button from "@/ui/Button/Button";
import SteamLogo from  '/public/steam/steam_logo.svg';
import Collections from '/public/steam/library_collections.svg';

export type SidebarSearchProps = {}

const SidebarActions = (props: SidebarSearchProps) => {
  return (
    <div className={'flex gap-1 p-2 shadow-lg z-10'}>
      <Button
        color={'secondary'}
        className={`grow !justify-start h-8 uppercase`}
      >
        <SteamLogo className={'absolute right-2 -top-12 !w-[130px] !h-auto text-steam-accent-1 opacity-20'} />
        <div className={'absolute inset-0 flex items-center px-4 text-sm'}>
          Home
        </div>
      </Button>

      <Button color={'secondary'} className={'!px-2'}>
        <Collections className={'!w-5 !h-auto'} />
      </Button>
    </div>
  );
};

export default SidebarActions;