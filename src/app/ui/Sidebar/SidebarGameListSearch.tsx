import React from 'react';
import TextField from "@/ui/TextField/TextField";
import Search from '/public/steam/search.svg';

export type SidebarGameListSearchProps = {}

const SidebarGameListSearch = (props: SidebarGameListSearchProps) => {
  return (
    <div className={'flex flex-col p-2'}>
      <TextField
        startAdornment={<Search className={'!w-4 text-steam-accent-1'} />}
        inputProps={{
          placeholder: 'Search by name'
        }}
      />
    </div>
  );
};

export default SidebarGameListSearch;