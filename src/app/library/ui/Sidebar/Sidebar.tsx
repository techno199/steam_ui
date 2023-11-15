import React from 'react';
import SidebarGameList from "@/app/library/ui/Sidebar/SidebarGameList";
import SidebarActions from "@/app/library/ui/Sidebar/SidebarActions";

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