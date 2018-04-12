'use babel'

import LinterJsonLintProvider from './linter-json-lint-provider'
import { install } from 'atom-package-deps'
const { atom } = global

export default {

  config: {
    allowComments: {
      type: 'boolean',
      default: false
    }
  },

  activate () {
    if (!atom.inSpecMode()) {
      install('linter-json-lint')
    }
  },

  provideLinter: () => LinterJsonLintProvider
}
