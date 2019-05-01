import React from 'react';

export const getIconPath = (name) => {
  switch (name) {
  case 'arrow-left':
    return <><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></>;
  case 'arrow-up':
    return <><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></>;
  case 'arrow-right':
    return <><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></>;
  case 'arrow-down':
    return <><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></>;
  case 'close':
    return <><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></>;
  case 'check':
    return <><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></>;
  default:
    break;
  }
};
