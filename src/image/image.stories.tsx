import React from 'react';
import Image from './image';

export default {
  title: 'Image component',
};

const main = () => (
  <>
    <Image
      size="small"
      src="https://www.frubana.com/images/logo-metadata.jpg"
    />
    <br />
    <Image
      size="medium"
      src="https://www.frubana.com/images/logo-metadata.jpg"
    />
    <br />
    <Image
      size="large"
      src="https://www.frubana.com/images/logo-metadata.jpg"
    />
  </>
);

export { main };
