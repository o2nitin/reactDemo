// npm install react-loadable --save

import React from 'react'
import Loadable from 'react-loadable';

const LoadableOtherComponent = Loadable({
  loader: () => import('./OtherComponent'),
  loading: () => <div>Loading...</div>,
});

export  const  MyComponent = () => (
  <LoadableOtherComponent/>
);