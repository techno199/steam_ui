import React from 'react';

export type NotFoundProps = {}

const NotFound = (props: NotFoundProps) => {
  return (
    <div className={'flex flex-col justify-center items-center grow'}>
      <div className={'flex flex-col'}>
        <h2 className={'text-2xl font-medium'}>ERROR</h2>
        <span className={'text-sm'}>Page could not be found :(</span>
      </div>
    </div>
  );
};

export default NotFound;