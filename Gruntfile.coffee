module.exports = (grunt) ->
  jsFiles = ['sonosweb/public/js/**/*.js', '!sonosweb/public/js/vendor/**/*']
  cssFiles = ['sonosweb/public/css/**/*.css']

  grunt.initConfig
    concat:
      sonosweb:
        files:
          'sonosweb/public/js/sonosweb.js': jsFiles
          'sonosweb/public/css/sonosweb.css': cssFiles
    jshint:
      files: jsFiles
      options:
        globalstrict: true
        '-W117': true
        browser: true
        devel: true
        jquery: true
    jsbeautifier:
      files: jsFiles
      options:
        indent_size: 2
    compass:
      sonosweb:
        options:
          sassDir: 'sonosweb/public/sass'
          cssDir: 'sonosweb/public/css'
          noLineComments: true
          force: true
    watch:
      sass:
        files: ['sonosweb/public/sass/**/*.scss']
        tasks: ['compass']
    uglify:
      sonosweb:
        options:
          sourceMap: true
        files: [
          expand: true
          cwd: 'sonosweb/public/js'
          src: ['**/*.js', '!**/*.min.js', '!**/*.src.js', '!vendor/**/*']
          dest: 'sonosweb/public/js'
        ]
    cssmin:
      sonosweb:
        expand: true
        cwd: 'sonosweb/public/css'
        src: '**/*.css'
        dest: 'sonosweb/public/css'

  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-jsbeautifier'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  
  grunt.registerTask 'default', ['jshint', 'compass']
  grunt.registerTask 'precommit', ['jshint', 'compass']
  grunt.registerTask 'deploy', ['concat', 'uglify', 'cssmin']
