import { src, dest, watch, parallel, series } from 'gulp';

// Работа с файлами стилей
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const scss = gulpSass(dartSass);

// Объединение нескольких файлов в один,
// сжатие и переименование итогового файла
import concat from 'gulp-concat';

// Работа с файлами js
import ugly from 'gulp-uglify-es';
const uglify = ugly.default;

// Запускаем сервер
import bSync from 'browser-sync';
const browserSync = bSync.create();

// Добавляем префиксы для совместимости версий
import autoprefixer from 'gulp-autoprefixer';
// import include from 'gulp-file-include';

// Настраиваем очистку папки build
import clean from 'gulp-clean';

export const styles = () => {
	return src('src/scss/style.scss')
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 10 versions'],
				cascade: false,
			})
		)
		.pipe(concat('style.min.css'))
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(dest('src/css'))
		.pipe(browserSync.stream());
};

export const scripts = () => {
	return src('src/js/main.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('src/js'))
		.pipe(browserSync.stream());
};

// export const html = () => {
// 	return src('src/html/index.html')
// 		.pipe(dest('src'))
// 		.pipe(browserSync.stream());
// };

export const watching = () => {
	watch(['src/scss/style.scss'], styles);
	watch(['src/js/main.js'], scripts);
	// watch(['src/html/index.html'], html);
	watch(['src/*.html']).on('change', browserSync.reload);
};

export const browsersync = () => {
	browserSync.init({
		server: {
			baseDir: 'src/',
		},
	});
};

export const cleanDist = () => {
	return src('dist').pipe(clean());
};

export const building = () => {
	return src(
		[
			'src/css/style.min.css',
			'src/js/main.min.js',
			'src/**/*.*html',
			'src/images/*.*',
			'src/fonts/*.*',
		],
		{ base: 'src' }
	).pipe(dest('dist'));
};

export const build = series(cleanDist, building);

export default parallel(styles, scripts, browsersync, watching);
// export default parallel(styles, scripts, html, browsersync, watching);
