module.exports = {
    dev: {
        nonull: true,
        files: [
            // Include our bower JS dependencies

            // angular
            {src: "bower_components/angular/angular.js", dest: "src/vendor/angular/angular.js"},
            {src: "bower_components/angular-animate/angular-animate.js", dest: "src/vendor/angular/angular-animate/angular-animate.js"},
            {src: "bower_components/angular-cookies/angular-cookies.js", dest: "src/vendor/angular/angular-cookies/angular-cookies.js"},
            {src: "bower_components/angular-resource/angular-resource.js", dest: "src/vendor/angular/angular-resource/angular-resource.js"},
            {src: "bower_components/angular-sanitize/angular-sanitize.js", dest: "src/vendor/angular/angular-sanitize/angular-sanitize.js"},
            {src: "bower_components/angular-touch/angular-touch.js", dest: "src/vendor/angular/angular-touch/angular-touch.js"},

            // bootstrap
            {src: "bower_components/bootstrap/dist/css/bootstrap.css", dest: "src/css/bootstrap.css"},
            {src: "bower_components/bootstrap/dist/js/bootstrap.js", dest: "src/vendor/jquery/bootstrap.js"},
            {src: "**", dest: "src/fonts", cwd: 'bower_components/bootstrap/fonts', expand : true},

            // fontawesome
            {src: "bower_components/font-awesome/css/font-awesome.min.css", dest: "src/css/font-awesome.min.css"},
            {src: "**", dest: "src/fonts", cwd: 'bower_components/font-awesome/fonts', expand : true},

            //jquery
            {src: "**", cwd: "vendor/jquery", dest: "src/vendor/jquery",expand:true},

            // libs
            {src: "bower_components/moment/min/moment.min.js", dest: "src/vendor/libs/moment.min.js"},
            {src: "bower_components/screenfull/dist/screenfull.min.js", dest: "src/vendor/libs/screenfull.min.js"},
            {src: "bower_components/lodash/dist/lodash.min.js", dest: "src/vendor/libs/lodash.min.js"},

            // core
            {src: "bower_components/angular-ui-router/release/angular-ui-router.js", dest: "src/vendor/angular/angular-ui-router/angular-ui-router.js"},
            {src: "bower_components/angular-bootstrap/ui-bootstrap-tpls.js", dest: "src/vendor/angular/angular-bootstrap/ui-bootstrap-tpls.js"},
            {src: "bower_components/angular-translate/angular-translate.js", dest: "src/vendor/angular/angular-translate/angular-translate.js"},
            {src: "bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js", dest: "src/vendor/angular/angular-translate/angular-translate-loader-static-files.js"},
            {src: "bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js", dest: "src/vendor/angular/angular-translate/angular-translate-storage-cookie.js"},
            {src: "bower_components/angular-ui-utils/ui-utils.js", dest: "src/vendor/angular/angular-ui-utils/ui-utils.js"},
            {src: "bower_components/ngstorage/ngStorage.js", dest: "src/vendor/angular/ngstorage/ngStorage.js"},
            {src: "bower_components/oclazyload/dist/ocLazyLoad.js", dest: "src/vendor/angular/oclazyload/ocLazyLoad.js"},
            {src: "bower_components/angularjs-toaster/toaster.js", dest: "src/vendor/angular/angularjs-toaster/toaster.js"},
            {src: "bower_components/angularjs-toaster/toaster.css", dest: "src/vendor/angular/angularjs-toaster/toaster.css"},
            {src: "bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js", dest: "src/vendor/angular/ngInfiniteScroll/ng-infinite-scroll.min.js"},

            // modules for lazy load
            {src: "bower_components/angular-ui-select/dist/select.min.js", dest: "src/vendor/modules/angular-ui-select/select.min.js"},
            {src: "bower_components/angular-ui-select/dist/select.min.css", dest: "src/vendor/modules/angular-ui-select/select.min.css"},

            {src: "bower_components/textAngular/dist/textAngular.min.js", dest: "src/vendor/modules/textAngular/textAngular.min.js"},
            {src: "bower_components/textAngular/dist/textAngular-sanitize.min.js", dest: "src/vendor/modules/textAngular/textAngular-sanitize.min.js"},

            {src: "bower_components/venturocket-angular-slider/build/angular-slider.min.js", dest: "src/vendor/modules/angular-slider/angular-slider.min.js"},


            {src: "bower_components/angular-file-upload/angular-file-upload.min.js", dest: "src/vendor/modules/angular-file-upload/angular-file-upload.min.js"},

            {src: "bower_components/ngImgCrop/compile/minified/ng-img-crop.js", dest: "src/vendor/modules/ngImgCrop/ng-img-crop.js"},
            {src: "bower_components/ngImgCrop/compile/minified/ng-img-crop.css", dest: "src/vendor/modules/ngImgCrop/ng-img-crop.css"},


            {src: "bower_components/angular-ui-map/ui-map.js", dest: "src/vendor/modules/angular-ui-map/ui-map.js"},


            {src: "bower_components/ng-grid/build/ng-grid.min.js", dest: "src/vendor/modules/ng-grid/ng-grid.min.js"},
            {src: "bower_components/ng-grid/ng-grid.min.css", dest: "src/vendor/modules/ng-grid/ng-grid.min.css"},



        ]
    },
    dist: {
        files: [
            {expand: true, dest: 'dist/', src:'**', cwd:'src/'},
            {dest: 'dist/index.html', src:'src/index.min.html'}
        ]
    }
};