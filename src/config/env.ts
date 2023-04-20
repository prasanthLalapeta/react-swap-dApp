type NodeEnv = 'development' | 'production';

// eslint-disable-next-line operator-linebreak
const env: NodeEnv =
  // eslint-disable-next-line operator-linebreak
  (process.env.REACT_APP_NODE_ENV as unknown as NodeEnv) ||
  'development';

type ConfigParams = {
  underlyingsAPIUrl: string;
  derivativesAPIUrl: string;
  websocketUrl: string;
  underlyings: string;
  derivatives: string;
};

type Config = {
  production: ConfigParams;
  development: ConfigParams;
};

const config: Config = {
  // The production development environment settings
  production: {
    underlyingsAPIUrl:
      'https://prototype.sbulltech.com/api/underlyings',
    derivativesAPIUrl:
      'https://prototype.sbulltech.com/api/derivatives',
    websocketUrl: 'wss://prototype.sbulltech.com/api/ws',
    underlyings: 'underlyings',
    derivatives: 'derivatives',
  },
  // The local development environment settings
  development: {
    underlyingsAPIUrl:
      'https://prototype.sbulltech.com/api/underlyings',
    derivativesAPIUrl:
      'https://prototype.sbulltech.com/api/derivatives',
    websocketUrl: 'wss://prototype.sbulltech.com/api/ws',
    underlyings: 'underlyings',
    derivatives: 'derivatives',
  },
};

export default config[env];
