#!/usr/bin/env node
// Strict enforcement for PowerShell + Windows users

const execPath = process.env.npm_execpath || '';
const execCmd = process.env.npm_config_user_agent || '';

const isUsingYarn = /yarn/.test(execPath) || /yarn/.test(execCmd);
const isUsingNpm = /npm/.test(execPath) || /npm/.test(execCmd);
const isUsingPnpm = /pnpm/.test(execCmd);
const isUsingBun = /bun/.test(execCmd);

if (!isUsingYarn || isUsingNpm || isUsingPnpm || isUsingBun) {
  console.error(`
 Please use Yarn (v4+) — npm, pnpm, and bun are not allowed.

 Run instead:
  - yarn dev:web
  - yarn dev:desktop
  - yarn dev:mobile
  - yarn dev:backend
`);
  process.exit(1);
}
