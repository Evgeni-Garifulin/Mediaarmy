// ===============================================
// Config file for production environment
// ===============================================


module.exports = {
    // Pug
    pugPrettify: false,

    // Images
    imagemin: true,

    // CSCC
    scssSourcemaps: false,
    scssAutoprefixer: true,
    scssCleanScss: true,
    scssUglify: true,

    // CSS
    cssMinify: true,

    // Scripts
    scriptsSourceMaps: false,
    scriptsUglify: true,
};
