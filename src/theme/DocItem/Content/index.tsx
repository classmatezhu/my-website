import React, {useEffect, useRef} from 'react';
import Content from '@theme-original/DocItem/Content';
import { init } from '@waline/client';
import '@waline/client/dist/waline.css'

import type { WalineInstance, WalineInitOptions } from '@waline/client';

export type WalineOptions = Omit<WalineInitOptions, 'el'> & { path: string };

const Waline = (props: WalineOptions) => {
  const walineInstanceRef = useRef<WalineInstance | null>(null);
  const containerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    });

    return () => walineInstanceRef.current?.destroy();
  }, []);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, props);

  return <div ref={containerRef} />;
};

export default function ContentWrapper(props) {
  const option = {
    serverURL: 'https://waline.zzy2001.com/',
    path: `${window.location.pathname}`
  };
  return (
    <>
      <Content {...props} />
      <Waline {...option}/>
    </>
  );
}
