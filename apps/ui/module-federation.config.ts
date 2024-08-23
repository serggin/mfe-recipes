import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ui',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
