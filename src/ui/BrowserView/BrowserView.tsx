import React from 'react';

export type BrowserViewProps = {
  href: string;
}

const BrowserView = (props: BrowserViewProps) => {
  const { href, ...rest } = props;

  return (
    <div className={'flex flex-col grow'}>
      {/* URL */}
      <div className={'px-2'}>
        <div className={'px-8 py-1 bg-steam-primary text-xs'}>
          {href}
        </div>
      </div>

      {/* Iframe */}
      <iframe src={href} className={'grow'} />
    </div>
  );
};

export default BrowserView;