/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {
  LoadContext,
  Plugin,
} from '@docusaurus/types';

export default function pluginReactPdf(
  context: LoadContext,
): Plugin<void> {
  const {
    i18n: {currentLocale},
  } = context;

  return {
    name: 'docusaurus-plugin-react-pdf',

    getThemePath() {
      return '../lib/theme';
    },

    getTypeScriptThemePath() {
      return '../src/theme';
    },

    configureWebpack(_config, isServer) {
      if(isServer) {
        return {
          resolve: {
            alias: {
              canvas: false,
            },
          },
        };
      }else {
        return {};
      }
    },
  };
}

