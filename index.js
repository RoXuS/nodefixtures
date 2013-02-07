/**
 * Module dependencies.
 */

var fs = require('fs')
  , path = require('path');

/**
 * Nodefixtures constructor.
 *
 */

function Nodefixtures () {

  this.Nodefixtures = {};

  var Nodefixtures_tmp = {}
      , Nodefixtures_path = "";
};


/**
 * Reload all the Nodefixtures
 *  
 * @api public
 */

Nodefixtures.prototype.reload = function () {

  var i
    , fxs = _clone(this.Nodefixtures);

  for ( i in fxs ) {
    if ( fxs.hasOwnProperty(i) ) {

      this[i]= fxs[i];
      
    }
  };

};


/**
 * Load all the Nodefixtures on path
 *  
 * @api public
 */

Nodefixtures.prototype.load = function () {
  
  if ( !this.Nodefixtures_path ) throw new Error('Nodefixtures path not found');

  var files = fs.readdirSync(this.Nodefixtures_path);
  var tmp_Nodefixtures_path = this.Nodefixtures_path;
  var tmp_Nodefixtures_tmp = [];

  files.forEach(function(file){
      var file_name = file.replace('.js', '');
      tmp_Nodefixtures_tmp[file_name] = JSON.parse(fs.readFileSync( path.join("/" + tmp_Nodefixtures_path, file), 'utf8')); 
  });

  this.Nodefixtures = tmp_Nodefixtures_tmp; 

  var i
    , fxs = _clone(this.Nodefixtures);
    

  for ( i in fxs ) {
    if ( fxs.hasOwnProperty(i) ) {

      this[i]= fxs[i];
      
    }
  };

};

/**
 * Set Nodefixtures path
 *  
 * @param String NodefixturesPath
 * @api public
 */

Nodefixtures.prototype.setPath = function (NodefixturesPath) {
  var current_dir = path.join( module.parent.filename, '..');
  this.Nodefixtures_path = current_dir + "/" + NodefixturesPath;
};


/**
 * Deep clone of JSON Object
 *
 * @param {Object} param
 * @return {Object}
 * @api private
 */

function _clone (param) {

    var result;

    if (typeof param === 'undefined')
      return undefined;
    else if (param instanceof Array)
      result = [];
    else if (typeof param === 'object')
      result = {};
    else
      return param;

    for (var i in param)
      result[i] = _clone(param[i]);


    return result;
};

module.exports = exports = new Nodefixtures();