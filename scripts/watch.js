/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-08
 * @author Liang <liang@maichong.it>
 */

'use strict';

const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
require('colors');
const utils = require('./utils');

const dir = process.cwd() + '/';
const modulesPath = dir + 'demo/node_modules/';

const files = fs.readdirSync(dir);

let dirs = [];
for (let file of files) {
  let libPath = dir + file;
  if (file.match(/^(al-|labrador)/) && utils.isDirectory(libPath)) {
    dirs.push(libPath);
  }
}

chokidar.watch(dirs, {
  ignored: /node_modules|labrador-demo|labrador-cli|labrador-upgrade|[\/\\]\./
}).on('all', (event, file) => {
  if (utils.isFile(file)) {
    let relative = path.relative(dir, file);
    let target = modulesPath + relative;
    console.log(`copy ${relative} -> ${path.relative(process.cwd(), target)}`.green);
    fs.copySync(file, target);
  }
});
