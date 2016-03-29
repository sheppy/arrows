import path from "path";
import gulp from "gulp";
import config from "./config";

// Copy assets
gulp.task("assets", () => {
    return gulp
        .src(path.join(config.dir.src, config.dir.client, config.dir.assets, config.glob.all))
        .pipe(gulp.dest(path.join(config.dir.dist, config.dir.assets)));
});
