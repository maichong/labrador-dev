/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-08
 * @author Liang <liang@maichong.it>
 */

'use strict';

const fs = require('fs');
const execSync = require('child_process').execSync;
require('colors');
const utils = require('./utils');

const dir = process.cwd() + '/';

const files = fs.readdirSync(dir);

for (let file of files) {
  let libPath = dir + file;
  if (file.match(/^(al-|labrador)/) && utils.isDirectory(libPath)) {
    let cmd = `pull ${file}`;
    console.log(cmd.green);
    execSync('git pull', {
      stdio: 'inherit',
      cwd: libPath
    });
  }
}
