'use client'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import LaunchedGameWindow from "@/app/ui/LaunchedGameWindow/LaunchedGameWindow";
import LayoutWrap from "@/app/layout-wrap";

const inter = Inter({subsets: ['latin']})

const Layout = ({children}) => {
  return (
    <html lang="en">
    <body className={inter.className}>
    <LayoutWrap>
      {children}
    </LayoutWrap>
    <LaunchedGameWindow/>
    </body>
    </html>
  )
}

export default Layout;
