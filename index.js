#!/usr/bin/env node

import chalk from 'chalk'

const text = (process.argv[2] || 'nothing')
const color = (process.argv[3] || '#ffffff')
const colorBg = (process.argv[4] || '#000000')

console.log(chalk.hex(color).bgHex(colorBg)(text))