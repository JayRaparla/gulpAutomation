var gulp = require('gulp'),
        handlebars = require('gulp-compile-handlebars'),
        rename = require('gulp-rename'),
        speakers = require('./data.json');


var gulp = require('gulp'),
        handlebars = require('gulp-compile-handlebars'),
        rename = require('gulp-rename');

gulp.task('handlebars', function() {
        for (var i = 0; i < speakers.length; i++) {
                var speaker = speakers[i],
                        fileName = speaker.fullName.replace(/ +/g, '-').toLowerCase();

                gulp.src('template/*.handlebars')
                        .pipe(handlebars(speaker))
                        .pipe(rename(fileName + ".html"))
                        .pipe(gulp.dest('build/speaker-profiles'));
        }
});

gulp.task('default', ['handlebars']);
