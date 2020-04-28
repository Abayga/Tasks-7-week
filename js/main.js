$(document).ready(function(){


//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// 1. Подключите jQuery, убедитесь в доступности объекта -библиотеки. Примечание:
// попробуйте подключение с разных CDN-хранилищ, и при помощи локального
// файла
// 2. Выберите при помощи селекторов jQuery
// — все HTML-элементы strong и окрасьте их в зеленый цвет
    let task1 = $('strong')
    task1.css('color', 'green')
    // — найдите все HTML-элементы em и добавьте им класс .selected
    let task2 = $('em')
    task2.addClass('selected')
    // — Найдите все элементы mark, которые находятся в div с классом row и задайте им
    // класс .selected
    let task3 = $(".row mark")
    task3.addClass('selected')
    // — Найдите все гиперссылки и удалите у них подчеркивания
    let task4 = $('a')
    task4.css('text-decoration','none')
    // — Переключите элементы strong с классом some в состояние без этого класса, а
    // тем элементам (strong), у которых небыло этого класса — добавьте.
    let task5 = $('strong')
    task5.toggleClass('some')
    // — среди набора элементов с классом .row удалите класс у второго элемент
    let task6 = $('.row')
    $(task6).eq(1). removeClass('row')
    // — прочитайте CSS-свойство color у второй гиперсылки в тексте
    let task7 = $('a')
    console.log(task7.css('color'))
})

