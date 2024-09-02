import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote1',

  exposes: {
    './Module': './src/remote-entry.ts',
    './images': './src/images.ts'
  },
  remotes: ['ui', 'store'],
};

export default config;
