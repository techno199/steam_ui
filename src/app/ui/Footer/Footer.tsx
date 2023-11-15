'use client'
import React from 'react';
import AddGame from '/public/steam/add_game.svg';
import Downloads from '/public/steam/downloads.svg';
import Friends from '/public/steam/friends.svg';

export type FooterProps = {}

const Footer = (props: FooterProps) => {
  return (
    <div className={'flex justify-between p-4 text-xs'}>
      {/* Add game */}
      <div className={'flex items-center gap-2 hover:text-steam-accent-2 cursor-pointer'}>
        <AddGame className={'!w-6 !h-auto'} />
        Add a Game
      </div>

      {/* Downloads */}
      <div className={'flex items-center gap-2 hover:text-steam-accent-2 cursor-pointer'}>
        <Downloads className={'!w-6 !h-auto'} />
        Manage Downloads
      </div>

      {/* Friends */}
      <div className={'flex items-center gap-2 hover:text-steam-accent-2 cursor-pointer'}>
        Friends & Chat
        <Friends className={'!w-4 !h-auto'} />
      </div>
    </div>
  );
};

export default Footer;