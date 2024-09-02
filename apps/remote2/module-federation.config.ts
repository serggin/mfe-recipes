import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote2',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  remotes: ['remote1', 'ui', 'store'],
};

export default config;
