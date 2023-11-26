'use client'
import React, {ReactNode} from 'react';
import SidebarGameListSearch from "@/app/library/ui/Sidebar/SidebarGameListSearch";
import Image from "next/image";
import {gameLibraryStore, steamStore} from "@/app/store";
import clsx from "clsx";
import {observer} from 'mobx-react';
import {useFormik} from "formik";
import {LibraryApp, AppCategory, AppCategories} from "@/../games.config";
import Dash from '/public/steam/dash.svg';
import {AnimatePresence, motion} from "framer-motion";

export type SidebarGameListProps = {}

const SidebarGameList = observer((props: SidebarGameListProps) => {
  const {selectedApp} = gameLibraryStore;

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: () => {

    }
  })

  const handleCategoryCollapse = (category: AppCategory) => (e) => {
    e.stopPropagation();
    category.isCollapsed = !category.isCollapsed;
    gameLibraryStore.selectedApp = {...gameLibraryStore.selectedApp};
  }

  const handleAppClick = (app: LibraryApp) => () => {
    console.log('handleAppClick', app)
    gameLibraryStore.selectedApp = app;
  }

  return (
    <div className={'bg-steam-secondary-300 grow'}>
      <SidebarGameListSearch formik={formik}/>

      <div className={'flex flex-col py-2'}>
        {AppCategories.map(category => (
          <AppCategoryTitle
            key={category.name}
            category={category}
            onClick={handleAppClick(category)}
            onCollapse={handleCategoryCollapse(category)}
          >
            {category.apps.filter(app => app.name.toLowerCase().includes(formik.values.search.toLowerCase())).map(app => (
              <AppTitle
                key={app.name}
                app={app}
                selected={app.name === selectedApp?.name}
                onClick={handleAppClick(app)}
              />
            ))}
          </AppCategoryTitle>
        ))}
      </div>
    </div>
  );
});

export default SidebarGameList;

type AppCategoryProps = {
  category: AppCategory;
  selected?: boolean;
  children?: ReactNode;
  onClick?: any;
  onCollapse?: any;
}
const AppCategoryTitle = (props: AppCategoryProps) => {
  const { category, selected, children, onClick, onCollapse, ...rest } = props;
  return (
    <div className={'flex flex-col'}>
      <div className={'relative h-6 overflow-hidden hover:overflow-visible'}>
        <span
          className={clsx(
            'flex items-center gap-2 min-w-full pl-3 pr-2 py-1 text-sm font-medium cursor-pointer uppercase whitespace-nowrap hover:absolute', {
              ['hover:bg-steam-accent-5']: !selected,
              ['bg-steam-accent-6 hover:bg-steam-accent-7 text-steam-accent-2']: selected
            }
          )}
          onClick={onClick}
        >
          <div className={'relative'} onClick={onCollapse}>
            <Dash className={'w-3'} />
            <AnimatePresence>
              {category.isCollapsed && (
                <motion.div
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: '100%'}}
                  exit={{opacity: 0, height: 0}}
                  className={'absolute top-0'}
                >
                  <Dash className={'w-3 rotate-90'} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {category.name}
        </span>
      </div>

      {!category.isCollapsed && (
        <div>
          {children}
        </div>
      )}
    </div>
  )
}

const AppTitle = ({app, selected = false, onClick}) => {
  return (
    <div className={'relative flex flex-col h-6 overflow-hidden hover:overflow-visible'}>
      <span
        className={clsx(
          'flex items-center gap-2 min-w-full pl-8 pr-2 py-0.5 text-xs cursor-pointer whitespace-nowrap hover:absolute', {
            ['text-steam-accent-2']: app.installed,
            ['hover:bg-steam-accent-5']: !selected,
            ['bg-steam-accent-6 hover:bg-steam-accent-7']: selected
          }
        )}
        onClick={onClick}
      >
        <div className={'relative w-5 h-5 shrink-0'}>
          <Image alt={''} src={app.logoUrl} fill/>
        </div>

        {app.name}
      </span>
    </div>
  )
}

