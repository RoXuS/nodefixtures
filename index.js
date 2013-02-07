
/**
 * Module dependencies.
 */

var fs = require('fs')
  , path = require('path');

/**
 * Fixtures constructor.
 *
 */

function Fixtures () {

  this.fixtures = {};

  var fixtures_tmp = {}
      , fixtures_path = "";
};


/**
 * Reload all the fixtures
 *  It is commonly used on setup when the fixtures has been modified.
 *  
 * @api public
 */

Fixtures.prototype.reload = function () {

  var i
    , fxs = _clone(this.fixtures);

  for ( i in fxs ) {
    if ( fxs.hasOwnProperty(i) ) {

      this[i]= fxs[i];
      
    }
  };

};


/**
 * Load all the fixtures on path
 *  It is commonly used on setup when the fixtures has been modified.
 *  
 * @api public
 */

Fixtures.prototype.load = function () {
  
  if ( !this.fixtures_path ) throw new Error('fixtures path not found');

  var files = fs.readdirSync(this.fixtures_path);
  var tmp_fixtures_path = this.fixtures_path;
  var tmp_fixtures_tmp = [];

  files.forEach(function(file){
      var file_name = file.replace('.js', '');
      tmp_fixtures_tmp[file_name] = JSON.parse(fs.readFileSync( path.join("/" + tmp_fixtures_path, file), 'utf8')); 
  });

  this.fixtures = tmp_fixtures_tmp; 

  var i
    , fxs = _clone(this.fixtures);
    

  for ( i in fxs ) {
    if ( fxs.hasOwnProperty(i) ) {

      this[i]= fxs[i];
      
    }
  };

};

/**
 * Reload all the fixtures
 *  It is commonly used on setup when the fixtures has been modified.
 *  
 * @api public
 */

Fixtures.prototype.setPath = function (fixturesPath) {
  var current_dir = path.join( module.parent.filename, '..');
  this.fixtures_path = current_dir + "/" + fixturesPath;
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

module.exports = exports = new Fixtures();