import React from 'react';
import BrowserView from "@/ui/BrowserView/BrowserView";

export type PageProps = {}

const Page = (props: PageProps) => {
  return (
    <BrowserView href={'https://store.steampowered.com/'} />
  );
};

export default Page;