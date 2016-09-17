module.exports = {
	app: {
        files: {
          'src/css/app.css': [
            'src/css/less/app.less'
          ]
        },
        options: {
          compile: true
        }
    },
    min: {
        files: {
            'dist/css/app.min.css': [
                'src/css/bootstrap.css',
                'src/css/*.css',
                'vendor/angular/angularjs-toaster/toaster.css'

            ]
        },
        options: {
            compress: true
        }
    }
}