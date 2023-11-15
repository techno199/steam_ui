'use client'
import Navbar from "@/app/ui/Navbar/Navbar";
import Sidebar from "@/app/ui/Sidebar/Sidebar";
import Footer from "@/app/ui/Footer/Footer";
import LibraryGameWindow from "@/app/ui/LibraryGameWindow/LibraryGameWindow";
import React from "react";
import {observer} from "mobx-react";
import LaunchedGamePackage from "@/app/ui/LaunchedGamePackage/LaunchedGamePackage";
import Window from "src/ui/Window/Window";
import {GameLibraryStore} from "src/app/store";

export default observer(() => {
  const {launchedGame} = GameLibraryStore;

  const handleCloseGame = () => {
    GameLibraryStore.launchedGame = null;
  }

  return (
    <main className='flex min-h-screen flex-col bg-steam-primary text-steam-accent-1'>
      <Navbar />
      <div className={'flex grow'}>
        <Sidebar />
        <LibraryGameWindow />
      </div>
      <Footer />

      {launchedGame && (
        <Window onClose={handleCloseGame}>
          <LaunchedGamePackage />
        </Window>
      )}
    </main>
  )
})
