import { ArkanoidGameHub } from './arkanoid/ArkanoidGameHub';
import { RandzuLogic } from './randzu/RandzuLogic';
import { ThimblerigLogic } from './thimblerig/ThimblerigLogic';
import { ModulesConfig } from '@proto-kit/common';
import { CheckersLogic } from './checkers';
import { GuessGame } from './number_guessing';

const modules = {
  ArkanoidGameHub,
  ThimblerigLogic,
  RandzuLogic,
  CheckersLogic,
  GuessGame
};

const config: ModulesConfig<typeof modules> = {
  ArkanoidGameHub: {},
  ThimblerigLogic: {},
  RandzuLogic: {},
  CheckersLogic: {},
  GuessGame: {}
};

export default {
  modules,
  config,
};
