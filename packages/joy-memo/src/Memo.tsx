// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { withCall } from '@polkadot/ui-api/index';
import { BareProps, CallProps } from '@polkadot/ui-api/types';
import { Bytes } from '@polkadot/types';
import { u8aToString} from '@polkadot/util';
import ReactMarkdown from 'react-markdown';

type Props = BareProps & CallProps & {
  memo_memo?: Bytes,
  markdown?: boolean
};

class Memo extends React.PureComponent<Props> {
  render () {
    const { memo_memo, markdown = true} = this.props;
    const memo = u8aToString(memo_memo);

    return (
      markdown ?
        <ReactMarkdown source={memo} />
        : <span>{memo}</span>
    );
  }
}

export default withCall('query.memo.memo')(Memo);
