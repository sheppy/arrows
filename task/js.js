import path from "path";
import gulp from "gulp";
import webpack from "webpack-stream";

import config from "./config";
import webpackConfig from"../webpack.config";


gulp.task("copy-phaser", () => {
    return gulp
        .src(path.join("node_modules", "phaser", "build", "phaser.min.js"))
        .pipe(gulp.dest(path.join(config.dir.dist, config.dir.js)));
});


// Compile JS
gulp.task("js",  () => {
    return gulp
        .src(path.join(config.dir.src, config.dir.client, config.dir.js, config.file.indexJs))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(path.join(config.dir.dist, config.dir.js)));
});
