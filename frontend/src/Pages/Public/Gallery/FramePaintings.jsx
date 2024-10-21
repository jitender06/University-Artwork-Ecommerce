import React from 'react';
import './SwingStyle.css';

export default function FramePaintings({ source }) {
  return (
    <figure className="swing">
      <img src={source} width="200" />
    </figure>
  )
}
