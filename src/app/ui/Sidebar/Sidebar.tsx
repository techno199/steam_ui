import React from 'react';
import SidebarGameList from "@/app/ui/Sidebar/SidebarGameList";
import SidebarActions from "@/app/ui/Sidebar/SidebarActions";

export type SidebarProps = {}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className={'flex flex-col w-[270px]'}>
      <SidebarActions />
      <SidebarGameList />
    </div>
  );
};

export default Sidebar;