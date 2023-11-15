import React from 'react';
import BrowserView from "@/ui/BrowserView/BrowserView";

export type PageProps = {}

const Page = (props: PageProps) => {
  return (
    <BrowserView href={'https://steamcommunity.com/profiles/76561198033523973'} />
  );
};

export default Page;