// Copyright 2017-2019 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from '../types';

import Memo from '@polkadot/joy-memo/index';

export default ([
  {
    Component: Memo,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'tx.memo.updateMemo'
      ]
    },
    i18n: {
      defaultValue: 'Memo'
    },
    icon: 'th',
    name: 'memo'
  }
] as Routes);
