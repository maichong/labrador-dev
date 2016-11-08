/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-08-29
 * @author Liang <liang@maichong.it>
 */

'use strict';

const fs = require('fs');
const execSync = require('child_process').execSync;
const async = require('async');
const npm = require('npm');
require('colors');

const dir = process.cwd() + '/';
const libs = process.argv.slice(2);

if (!libs.length) {
  console.log('no package to publish'.red);
  process.exit();
}


async.eachSeries(libs, (lib, callback) => {
  if (!fs.existsSync(dir + lib)) {
    console.log(`skip publish ${lib}`.grey);
    return;
  }

  function done() {
    let cmd = `open http://npm.taobao.org/sync/${lib}`;
    console.log(cmd.green);
    execSync(cmd, {
      stdio: 'inherit'
    });

    cmd = `open http://registry.npm.taobao.org/update/${lib}`;
    console.log(cmd.green);
    execSync(cmd, {
      stdio: 'inherit'
    });
  }

  let cmd = `npm publish ${lib}`;
  console.log(cmd.green);
  process.chdir(dir + lib);
  npm.load({
    registry: 'https://registry.npmjs.org/'
  }, () => {
    npm.commands.publish([], (error) => {
      done();
      callback(error);
    });
  });
}, () => {
  console.log('done');
});
