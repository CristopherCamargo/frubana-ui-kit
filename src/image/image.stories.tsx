import React from 'react';
import Image from './image';

export default {
  title: 'Image component',
};

const large = () => (
  <Image size="large" src="https://www.frubana.com/images/logo-metadata.jpg" />
);

const medium = () => (
  <Image size="medium" src="https://www.frubana.com/images/logo-metadata.jpg" />
);

const small = () => (
  <Image size="small" src="https://www.frubana.com/images/logo-metadata.jpg" />
);

export { large, medium, small };
