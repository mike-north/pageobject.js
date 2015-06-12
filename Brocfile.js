var esTranspiler = require('broccoli-babel-transpiler');
var ES6Modules = require('broccoli-es6modules');
var mergeTrees = require('broccoli-merge-trees');
var funnel = require('broccoli-funnel');

var MODULE_TYPES = ['amd', 'namedAmd', 'cjs', 'umd'];


var moduleTrees = MODULE_TYPES.map(function (typ) {
  var scriptTree = esTranspiler('src', {
    blacklist: ['es6.modules']
  });

  var moduleTree = new ES6Modules(scriptTree, {
    format: typ,
    bundleOptions: {
      entry: 'pageobject.js',
      name: 'pageobject'
    }
  });
  return funnel(moduleTree, {
    destDir: typ
  });
})

var allTrees = mergeTrees(moduleTrees);


module.exports = allTrees;
