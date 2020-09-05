import React from 'react';
import { ImgContainer, ResponsiveImg } from './styles';

function ResponsiveImage({src, alt}) {
  return (
    <ImgContainer>
      <ResponsiveImg  src={src} alt={alt} />
    </ImgContainer>
  );
}

export default ResponsiveImage;