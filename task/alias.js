import gulp from "gulp";

gulp.task("build", ["html", "css", "copy-phaser", "js"]);

gulp.task("dev", ["html", "css", "copy-phaser", "server"]);

gulp.task("default", ["build"]);
