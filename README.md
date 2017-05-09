# js_home_task_251. 
1. Пиксельная точность для Chrome latest
2. Верстка  responsive.
3. Подключены нестандартные шрифты.
4. Использован препроцессор SASS.
5. Для сборки использован `gulp`.
6. Сжатие картинок и спрайты выполнены  с помощью сборщика gulp.
7. Слайдеры сделаны без JS (только CSS)
8. В нижней части макета есть блок картинок с заголовком "Discover holiday activity ideas", они расположены с помощью плагина [Masonry].
9. Картинки загружаются с помощью ajax-запроса с  сервиса для поиска картинок.
10. После блока "плитки" есть поле поиска. При введении в поле текста и нажатии кнопки "Search partners" отправляется запрос на получение картинок с сервиса, и заменются картинки в плитке на новые, соответствующие запросу. В качестве текста для каждой картинки можно используется поле `word` из ответа сервера
11. При первой загрузке страницы в плитке выводитяся случайные картинки.

