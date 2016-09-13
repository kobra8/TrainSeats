var gulp = require('gulp');
// wskazanie paczki "gulp" z folderu "node_modules" i zapisanie jej do zmiennej
var concat = require('gulp-concat');
// wskazanie paczki "gulp-concat" z folderu "node_modules" i zapisanie jej do zmiennej
//gulp odpowiada za tworzenie zadań i automatyzację
//gulp-concat rozszerza możliwości gupla o konkaktenację plików
var browserSync = require('browser-sync');

var sass = require('gulp-ruby-sass');
// gulp sass pozwoli nam na kompilację sasa przy pomocy języka Ruby
var rename = require('gulp-rename');
//dodatek do nadpisywania plików
var sourcemaps = require('gulp-sourcemaps');

var Files = {
//obiekt files odpowiada za ścieżkę do plików w projekcie  
  
  html : './index.html',
 // css : ['./css/style1.css', './css/style2.css', './css/style3.css'],
 css_dest : './css',
// js : ['./js/app.js','./js/cabswitch.js', './js/seatswitch.js'],
// js_dest : './js',
  scss : './sass/main.scss' 
};

//gulp.task('css', function(){
//  //utwórz zadanie CSS
//  return gulp.src(Files.css)
//        .pipe(concat('main.css')) //wybór nazwy pliku
//        .pipe(gulp.dest(Files.css_dest)) //zapisanie we wskazanym folderze
//        .pipe(browserSync.reload({stream: true})); // odświerzenie przeglądarki
//  
//})
gulp.task('sass', function(){
  return sass(Files.scss,{
    style: 'expanded',
    sourcemap: true
  })
  .on('error', sass.logError)
  .pipe(sourcemaps.write())
  .pipe(rename('main.css'))
  .pipe(gulp.dest(Files.css_dest))
  .pipe(browserSync.reload({stream: true}));
});


//utwórz zadanie js
//gulp.task('js', function(){
//  
//  return gulp.src(Files.js)
//        .pipe(concat('main.js'))
//        .pipe(gulp.dest(Files.js_dest))
//        .pipe(browserSync.reload({stream: true}));
//})
// default zawiera zbiór poleceń do wykonania które można wykonać z konsoli poleceniem gulp
gulp.task('default', [/*'js',*/ 'sass'], function(){
  
  //Włączani ebroweserSync - odpalenie serwera lokalnego
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./sass/**/*.scss', ['sass']);
  // gulp.watch('./js/**/*.js', ['js']);
  gulp.watch(Files.html, browserSync.reload); //watcher index html
  
  
});
