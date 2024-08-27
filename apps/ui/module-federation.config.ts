import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ui',

  exposes: {
    './Module': './src/remote-entry.ts',
    './TopAppBar': '/src/TopAppBar/TopAppBar.tsx',
    './Header': '/src/Header/Header.tsx',
    './Text': '/src/Text/Text.tsx',
    './ImageCard': '/src/ImageCard/ImageCard.tsx',
  },
};

export default config;
