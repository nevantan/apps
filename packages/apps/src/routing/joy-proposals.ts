import { Routes } from '../types';

import Proposals from '@polkadot/joy-proposals/index';

export default ([
  {
    Component: Proposals,
    display: {
      needsAccounts: true,
      needsApi: []
    },
    i18n: {
      defaultValue: 'Proposals'
    },
    // icon: 'file alternate outline',
    icon: 'tasks',
    name: 'proposals'
  }
] as Routes);
