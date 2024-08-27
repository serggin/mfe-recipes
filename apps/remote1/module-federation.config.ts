import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote1',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  remotes: ['ui'],
};

export default config;
