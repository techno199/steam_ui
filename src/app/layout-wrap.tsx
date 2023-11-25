'use client'
import React, {ReactNode, useEffect} from 'react';
import Navbar from "@/app/ui/Navbar/Navbar";
import Footer from "@/app/ui/Footer/Footer";
import {observer} from "mobx-react";
import {steamStore} from "@/app/store";
import {AnimatePresence, motion} from "framer-motion";
import SteamLogo from '/public/steam/steam_logo_reverse.svg';
import {redirect} from "next/navigation";

export type LayoutNavbarProps = {
  children: ReactNode;
}

const LayoutWrap = observer(({children}: LayoutNavbarProps) => {
  useEffect(() => {
    setTimeout(() => {
      steamStore.loggedIn = true;
      redirect('/library')
    }, 2200)
  }, [])

  return (
    <main className='flex flex-col min-h-screen bg-steam-primary text-steam-accent-1'>
      <AnimatePresence mode={'popLayout'}>
        {!steamStore.loggedIn && (
          <motion.div
            key={'login'}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={'grid place-items-center grow text-white'}
          >
            {/* Logging in window */}
            <div className={`relative w-[750px] h-[500px] overflow-hidden`}>
              <div
                className={'absolute inset-0 flex flex-col justify-center items-center z-20 gap-8'}
              >
                {/* Content */}
                <div className={'relative flex flex-col'}>
                  <div
                    style={{
                      animationDuration: '2.4s'
                    }}
                    className={'absolute inset-[2px] animate-spin border-2 border-steam-accent-4 border-b-transparent rounded-full'}
                  />
                  <SteamLogo className={'w-[6rem] h-auto'} />
                </div>

                <span>Logging in...</span>

                <div className={'flex items-center gap-2 pt-10'}>
                  <img className={'h-8'} src={'https://avatars.cloudflare.steamstatic.com/561494496009d61704673e6d1524f9393792b598_full.jpg'} />
                  <span>Dark Vjurge</span>
                </div>
              </div>

              {/* Background */}
              <div className={'absolute inset-0'}>
                <div className={'absolute -inset-[14.5rem]'}>
                  <div className={'absolute inset-0 bg-black/50 z-10 backdrop-blur-sm'}/>
                  <img
                    src={'/steam/logging_bg.png'}
                    className={'w-full h-full object-cover -skew-y-[10deg] skew-x-[20deg] -translate-y-16'}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {steamStore.loggedIn && (
          <>
            <div className={'overflow-hidden'}>
              <motion.div
                initial={{y: -10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 1.2, duration: .5, type: 'tween'}}
              >
                <Navbar/>
              </motion.div>
            </div>

            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.2, duration: .5, type: 'tween'}}
              className={'relative flex flex-col grow overflow-auto'}
            >
              {children}
            </motion.div>

            <div className={'overflow-hidden'}>
              <motion.div
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 1.2, duration: .5, type: 'tween'}}
              >
                <Footer/>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>

  );
});

export default LayoutWrap;