module.exports = function(grunt) {
  grunt.initConfig({

    typescript: {
      compile: {
        src: ['front_src/**/*.ts'],
        dest: 'src/main/resources/static/js',
        options: {
          module: 'amd',
          target: 'es5',
          noImplicitAny: true,
        }
      }
    },

    requirejs: {
      dev: {
        options: {
          mainConfigFile: './src/main/resources/static/js/require.config.js',
          baseUrl: './src/main/resources/static/js',
          name: 'require.config',
          out: './src/main/resources/static/js/app.js',
          optimize: 'none'
        }
      }
    },

    tslint: {
      ts: {
        options: {
          configuration: grunt.file.readJSON('tslint.json')
        },
        files: {
          src: ['front_src/**/*.ts',
            '!front_src/typings/**/*.ts'
          ]
        }
      }
    },

    jst: {
      compile: {
        options: {
          processName: function (filename) {
            return filename.replace(/(front_src\/template\/|.html)/g, '');
          },
          processContent: function (src) {
            return src.replace(/(^\s+|\s+$)/gm, '');
          },
          amd: true
        },
        files: {
          'src/main/resources/static/js/jst.js': [
            'front_src/template/**/*.html'
          ]
        }
      }
    },

    compass: {
      compile: {
        options: {
          sassDir: 'resources/scss',
          cssDir: 'src/main/resources/static/css',
          spriteLoadPath: 'resources/img',
          imagesDir: 'src/main/resources/static/img',
          outputStyle: 'expanded',
          noLineComments: false,
        }
      }
    },

    tsd : {
      refreshFront: {
        options: {
          command: 'reinstall',
          latest: true,
          config: './front_src/tsd.json',
          opts: {}
        }
      }
    },

    watch: {
      typescript: {
        tasks: "ts-build-fast",
        files: ["front_src/**/*.ts"]
      },
      jst: {
        tasks: "jst:compile",
        files: ["front_src/template/**/*.html"]
      },
      sass: {
        tasks: "compass:compile",
        files: ["resources/scss/**/*.scss"]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-tsd');


  grunt.registerTask("build-all",
    [
      "tslint:ts",
      "jst:compile",
      "typescript:compile",
      "requirejs:dev",
      "compass:compile"
    ]
  );

  grunt.registerTask("ts-build-fast",
    [
      "tslint:ts",
      "typescript:compile",
    ]
  );

};
