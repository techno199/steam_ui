import React from 'react';
import Button from "@/ui/Button/Button";
import Image from "next/image";

export type ProfileButtonProps = {}

const ProfileButton = (props: ProfileButtonProps) => {
  return (
    <Button
      color={'secondary'}
      className={'!px-1 !py-0 font-medium hover:!bg-[rgb(33_58_80)]'}
    >
      <div className={'relative w-6 h-full border-r-2 border-steam-accent-4-300'}>
        <Image
          fill
          className={'object-cover'}
          src={'https://avatars.cloudflare.steamstatic.com/561494496009d61704673e6d1524f9393792b598_full.jpg'}
        />
      </div>

      <span className={'px-2 text-steam-accent-4-300'}>
        Dark Vjurge
      </span>

      <span className={'pr-2 text-steam-accent-1'}>
        24 017,95₽
      </span>
    </Button>
  );
};

export default ProfileButton;