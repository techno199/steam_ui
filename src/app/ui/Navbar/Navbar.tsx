'use client'
import React from 'react';
import SteamLogo from '/public/steam/steam_logo_rounded.svg';
import Notification from '/public/steam/notification.svg';
import Announcement from '/public/steam/announcement.svg';
import Button from "@/ui/Button/Button";
import ProfileButton from "@/app/ui/Navbar/ProfileButton";
import BigPicture from '/public/steam/big_picture.svg';
import Minimize from '/public/steam/minimize_window.svg';
import Maximize from '/public/steam/maximize_window.svg';
import Close from '/public/steam/close_window.svg';
import ArrowUp from '/public/steam/arrow_up.svg';

export type NavbarProps = {}

const Navbar = (props: NavbarProps) => {
  return (
    <div>
      {/* 1st ROW */}
      <div className={'flex gap-2 items-start'}>
        {/* Navbar */}
        <div className={'flex grow pl-4 pr-1.5 py-2 text-xs'}>
          <div className={'flex items-center gap-3'}>
            <MenuItem >
              <SteamLogo className={'w-5 h-full'} />
              Steam
            </MenuItem>
            <MenuItem>View</MenuItem>
            <MenuItem>Friends</MenuItem>
            <MenuItem>Games</MenuItem>
            <MenuItem>Help</MenuItem>
          </div>

          {/* Quick actions */}
          <div className={'flex gap-2 ml-auto'}>
            <Button color={'accent-4'}>
              <Announcement className={'w-4 h-4'} />
            </Button>
            <Button color={'accent-3'}>
              <Notification className={'w-4 h-4'} />
            </Button>
            <ProfileButton />
            <Button className={'!px-2'}>
              <BigPicture className={'w-3'} />
            </Button>
          </div>
        </div>

        {/* Window actions */}
        <div className={'flex h-8'}>
          <Button className={'!px-2 !pt-3'}>
            <Minimize />
          </Button>
          <Button className={'!px-2 !pt-3'}>
            <Maximize />
          </Button>
          <Button className={'!px-2 !pt-3'}>
            <Close className={'!w-[.7em] !h-[0.7em]'} />
          </Button>
        </div>
      </div>

      {/* 2nd ROW */}
      <div className={'flex gap-2 px-4 pb-4 text-steam-secondary'}>
        <div className={'flex gap-1.5'}>
          <ArrowUp className={'w-6 -rotate-90 text-steam-accent-1 hover:text-steam-accent-2'}/>
          <ArrowUp className={'w-6 rotate-90 hover:text-steam-accent-2'}/>
        </div>

        <div className={'flex gap-[18px]'}>
          <span className={'text-lg text-steam-accent-2 uppercase font-bold'}>
            Store
          </span>
          <span className={'text-lg text-steam-accent-4 underline underline-offset-8 decoration-4 uppercase font-bold'}>
            Library
          </span>
          <span className={'text-lg text-steam-accent-2 uppercase font-bold'}>
            Community
          </span>
          <span className={'text-lg text-steam-accent-2 uppercase font-bold'}>
            Dark Vjurge
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MenuItem = props => (
  <span className={'flex items-center gap-1 hover:text-steam-accent-2 duration-200 cursor-pointer'} {...props} />
)