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

// Добавляем пакет объединения файлов
import include from 'gulp-file-include';

// Настраиваем очистку папки build
import clean from 'gulp-clean';

import ghPages from 'gh-pages';

import path from 'path';

// import fs from 'fs/promises';
// import { constants } from 'fs';

export const deploy = (cb) => {
	ghPages.publish(path.join(process.cwd(), '/dist'), cb);
};

export const styles = () => {
	return (
		src('src//**/*.scss')
			// src('src/style.scss')
			// .pipe(concat('style.min.css'))
			.pipe(concat('style.css'))
			.pipe(
				autoprefixer({
					overrideBrowserslist: ['last 10 versions'],
					cascade: false,
				})
			)
			// .pipe(scss({ outputStyle: 'compressed' }))
			.pipe(scss())
			.pipe(dest('src/css'))
			.pipe(browserSync.stream())
	);
};

// Version 03
export const scripts = () => {
	return (
		src('src/js_modules/*.js')
			// .pipe(concat('script.js'))
			// .pipe(uglify())
			.pipe(dest('src/js'))
			.pipe(browserSync.stream())
	);
};

// Version 02
// export const scripts = () => {
// 	return (
// 		src('src/js/modules/*.js')
// 			.pipe(concat('script.js'))
// 			// .pipe(uglify())
// 			.pipe(dest('src/js'))
// 			.pipe(browserSync.stream())
// 	);
// };

// Version 01
// export const scripts = () => {
// 	return src('src/js/main.js')
// 		.pipe(concat('main.min.js'))
// 		.pipe(uglify())
// 		.pipe(dest('src/js'))
// 		.pipe(browserSync.stream());
// };

// Собираем html-файлы и перемещаем результат в папку 'src/html_result'
export const html = () => {
	// return src(['src/**/*.html'], { base: 'src' })
	return src(['src/html_pages/**/*.html'])
		.pipe(include({ prefix: '@@' }))
		.pipe(dest(['src/html_result']));
	// .pipe(browserSync.stream());
};

// Собранные файлы html перемещаем в рабочую папку
// и подключаем к процессу работы локального сервера
export const htmlResult = () => {
	return src(['src/html_result/*.html'])
		.pipe(dest(['src']))
		.pipe(browserSync.stream());
};

// Перезаписываем запускающий файл index.html в корне проекта
export const html_index = () => {
	return src('src/html_result/main.html')
		.pipe(concat('index.html'))
		.pipe(dest('src/'))
		.pipe(browserSync.stream());
};

export const watching = () => {
	// watch(['src/style.scss'], styles);
	watch(['src/**/*.scss'], styles);
	// watch(['src/js/**/*.js'], scripts);
	// watch(['src/js/main.js'], scripts);
	watch(['src/js_modules/*.js'], scripts);
	watch(['src/html_pages/**/*.html'], html);
	watch(['src/html_result/*.html'], htmlResult);
	watch(['src/html_result/main.html'], html_index);
};

export const browsersync = () => {
	browserSync.init({
		server: {
			baseDir: 'src/',
		},
	});
};

export const cleanDist = () => {
	return src('dist/*').pipe(clean());
};

export const building = () => {
	return src(
		[
			'src/css/*.css',
			'src/js/*.js',
			// 'src/js/main.min.js',
			// 'src/html_result/**/*.html',
			'src/index.html',
			'src/fonts/*.*',
		],
		{ base: 'src' }
	).pipe(dest('dist'));
};

export const buildHTML = () => {
	return src(['src/html_result/*.html']).pipe(dest('dist'));
};

export const buildImg = () => {
	return src(
		['src/images/**/*'],
		{ base: 'src' },
		{ encoding: false },
		{ buffer: false }
	).pipe(dest('dist', { encoding: false }));
};

export const build = series(cleanDist, building, buildHTML, buildImg);

export default parallel(styles, scripts, html, browsersync, watching);

// export default parallel(
// 	styles,
// 	scripts,
// 	series(html, html_index),
// 	browsersync,
// 	watching
// );
