import gulp from "gulp";

gulp.task("build", ["html", "css", "assets", "copy-phaser", "js"]);

gulp.task("dev", ["html", "css", "assets", "copy-phaser", "server"]);

gulp.task("default", ["build"]);
