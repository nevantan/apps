// Copyright 2017-2019 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps } from '@polkadot/ui-app/types';

import './index.css';

import React from 'react';
import store from 'store';
import { typeRegistry } from '@polkadot/types';
import createApp from '@polkadot/ui-app/index';
import { classes } from '@polkadot/ui-app/util';
import Signer from '@polkadot/ui-signer/index';
import settings from '@polkadot/joy-settings/index';
import { Provider } from 'unstated';

import Connecting from './Connecting';
import Content from './Content';
import NodeInfo from './NodeInfo';
import SideBar from './SideBar';

type Props = BareProps & {};

function App (props: Props) {
  return (
    <Provider>
    <div className={classes(`theme--${settings.uiTheme}`, 'apps--App')}>
      <SideBar>
        <NodeInfo />
      </SideBar>
      <Signer>
        <Content />
      </Signer>
      <Connecting />
    </div>
    </Provider>
  );
}

const url = process.env.WS_URL || settings.apiUrl || undefined;

console.log('Web socket url=', url);

try {
  require('@polkadot/joy-utils/types').registerJoystreamTypes();

  const types = store.get('types') || {};
  const names = Object.keys(types);

  if (names.length) {
    typeRegistry.register(types);
    console.log('Type registration:', names.join(', '));
  }
} catch (error) {
  console.error('Type registration failed', error);
}

createApp(App, {
  url
});
