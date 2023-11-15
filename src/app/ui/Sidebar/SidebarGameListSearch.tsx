import React from 'react';
import TextField from "@/ui/TextField/TextField";
import Search from '/public/steam/search.svg';
import {FormikProps} from "formik";

export type SidebarGameListSearchProps = {
  formik: FormikProps<any>;
}

const SidebarGameListSearch = (props: SidebarGameListSearchProps) => {
  const { formik, ...rest } = props;

  return (
    <div className={'flex flex-col p-2'}>
      <TextField
        name={''}
        value={formik.values.search}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        startAdornment={<Search className={'!w-4 text-steam-accent-1'} />}
        inputProps={{
          placeholder: 'Search by name'
        }}
      />
    </div>
  );
};

export default SidebarGameListSearch;