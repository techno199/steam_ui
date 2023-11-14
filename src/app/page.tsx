'use client'
import Navbar from "@/app/ui/Navbar/Navbar";
import Sidebar from "@/app/ui/Sidebar/Sidebar";
import Footer from "@/app/ui/Footer/Footer";
import LibraryGameWindow from "@/app/ui/LibraryGameWindow/LibraryGameWindow";
import React from "react";
import {observer} from "mobx-react";
import LaunchedGamePackage from "@/app/ui/LaunchedGamePackage/LaunchedGamePackage";

export default observer(() => {
  return (
    <main className='flex min-h-screen flex-col bg-steam-primary text-steam-accent-1'>
      <Navbar />
      <div className={'flex grow'}>
        <Sidebar />
        <LibraryGameWindow />
      </div>
      <Footer />

      <LaunchedGamePackage />
    </main>
  )
})
