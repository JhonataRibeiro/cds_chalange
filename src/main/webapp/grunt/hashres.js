/**
 * Created by felipecm on 19/12/14.
 */

module.exports = {
    options: {
        // Optional. Encoding used to read/write files. Default value 'utf8'
        encoding: 'utf8',
        // Optional. Format used to name the files specified in 'files' property.
        // Default value: '${hash}.${name}.cache.${ext}'
        fileNameFormat: '${hash}.${name}.cache.${ext}',
        // Optional. Should files be renamed or only alter the references to the files
        // Use it with '${name}.${ext}?${hash} to get perfect caching without renaming your files
        // Default value: true
        renameFiles: true
    },
    // hashres is a multitask. Here 'prod' is the name of the subtask. You can have as many as you want.
    dist: {
        // Files to hash
        src: [
            // WARNING: These files will be renamed!
            'dist/js/app.min.js',
            'dist/css/app.min.css'],
        // File that refers to above files and needs to be updated with the hashed name
        dest: 'dist/index.html'
    }

};