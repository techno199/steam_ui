'use client'
import React from 'react';
import Navbar from "@/app/ui/Navbar/Navbar";
import Sidebar from "@/app/library/ui/Sidebar/Sidebar";
import LibraryGameWindow from "@/app/library/ui/LibraryGameWindow/LibraryGameWindow";
import Footer from "@/app/ui/Footer/Footer";
import Window from "@/ui/Window/Window";
import LaunchedGamePackage from "@/app/library/ui/LaunchedGamePackage/LaunchedGamePackage";
import {gameLibraryStore} from "@/app/store";
import {observer} from "mobx-react";

export type PageProps = {}

const Page = observer((props: PageProps) => {
  return (
    <div className={'flex grow'}>
      <Sidebar />
      <LibraryGameWindow />
    </div>
  );
});

export default Page;