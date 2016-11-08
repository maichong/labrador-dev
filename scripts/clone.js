/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-08
 * @author Liang <liang@maichong.it>
 */

'use strict';

const execSync = require('child_process').execSync;
require('colors');
const utils = require('./utils');
const libs = require('./libs');

const dir = process.cwd() + '/';

for (let lib of libs) {
  let libPath = dir + lib;
  if (!utils.isDirectory(libPath)) {
    let cmd = `git clone https://github.com/maichong/${lib}.git`;
    console.log(cmd.green);
    execSync(cmd, {
      stdio: 'inherit'
    });
  }
}
