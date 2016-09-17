module.exports = {
  dist:{
    src:[
      'src/vendor/jquery/jquery.min.js',
      'src/vendor/angular/angular.js',
      'src/vendor/angular/**/*.js',
      'src/js/*.js',
      'src/js/services/*.js',
      'src/js/directives/*.js',
      'src/js/filters/*.js',
      'src/js/app/**/*.js'
    ],
    dest:'dist/js/dist.js'
  }
};