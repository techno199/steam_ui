import React from 'react';
import {ReactComponent as SteamLogo} from '/public/steam_logo.svg'

export type SteamNavbarProps = {}

const SteamNavbar = (props: SteamNavbarProps) => {
  return (
    <div className={'flex justify-between px-1.5 py-2 text-xs'}>
      <div className={'flex gap-5 text-steam-accent-1'}>
        <SteamLogo />
        <span>Steam</span>
        <span>View</span>
        <span>Friends</span>
        <span>Games</span>
        <span>Help</span>
      </div>
    </div>
  );
};

export default SteamNavbar;