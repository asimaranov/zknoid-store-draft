import { AuroSigner, ClientAppChain } from '@proto-kit/sdk';
import {
  config as gamesConfig,
  modules as gamesModules,
} from '@zknoid/chain-games/src';
import { Balances } from '@zknoid/chain-sdk/src/framework/balances';

const modules = {
  ...gamesModules,
  Balances,
};

const config = {
  ...gamesConfig,
  Balances: {},
};

export default {
  modules,
  config,
};
