/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "vendor/bower/jquery/jquery.js",
        "vendor/js/angular.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/app*.js",
        "app/**/*.js"
      ]
    },

    pages: {
      source: [
        "app/*.html",
        "app/*.jade",
        "app/*.us"
      ]
    },
    
    less: {
      main: "app/main.less",
      app: "app/**/*.less",
      compile: {
        options: {
          paths: [
            "vendor/css/normalize.css",
            "vendor/css/**/*.css",
            "app/*.less",
            "app/**/*.less"
          ]
        }
      }
    },

    css: {
      app: [
        "app/*.css",
        "app/**/*.css"
        ]
    },
  };
};
