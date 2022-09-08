$('.submit').on('click', function (event) {
    event.preventDefault()
    $('.text').empty();
    $('.inner').empty();
    $('.lead').empty();
    let input = $('input').val()
    console.log(input)
    let Selectvalue = $('select').val()
    $.ajax({
        url: `https://swapi.dev/api/${Selectvalue}?search=${input}`,
        method: 'GET',
        success: function (result) {
            let items = [];
            let item = []
            let list = []
            $.each(result, function (key, data) {
                if (key != 'results') {
                    return
                }
                else {
                    items.push("<h2>" + Selectvalue + ':' + "</h2>")
                    $.each(data, function (index, val) {
                        console.log(val)
                        $.each(val, function (el, part) {
                            if (el === 'name' || el === 'title') {
                                item.push(`<li> ${el} : <span class='name'>${part}</span></li>`)
                            }
                        })
                    })
                }
            })
            console.log(item)
            $('.text').append(item)
            $('.inner').append(items)
            $('.name').on('click', function (event) {
                $('.lead').empty();
                $('.name').removeClass('unique');
                event.preventDefault()
                $(this).addClass('unique');
                let inputValue = $(this).text()
                console.log(inputValue)
                $.ajax({
                    url: `https://swapi.dev/api/${Selectvalue}/?search=${inputValue}`,
                    method: 'GET',
                    success: function (final) {
                        console.log(final)
                        let list = []
                        $.each(final, function (key, data) {
                            console.log(data)
                            if (key != 'results') {
                                return
                            }
                            else {
                                $.each(data, function (index, val) {
                                    $.each(val, function (el, part) {
                                        list.push(`<li> ${el} : <span class='info'>${part}</span></li>`)
                                    }
                                    )
                                })
                            }
                        })
                        $('.lead').prepend(`<button type="button" name="submit" class="delete">Delete</button>`).delay(1000).show(2000);
                        $('.lead').append(list).delay(1000).show(2000);
                        $('.delete').on('click', function (event) {
                            event.preventDefault()
                            $('.lead').empty();
                            $('.name').removeClass('unique');
                        })
                    }
                })
            }
            )
        }
    })
})





// $('.submit').on('click', function (event) {
//     event.preventDefault()
//     $('.text').empty();
//     $('.inner').empty();
//     $('.lead').empty();
//     let Selectvalue = $('select').val()
//     $.ajax({
//         url: `https://swapi.dev/api/${Selectvalue}`,
//         method: 'GET',
//         success: function (result) {
//             let items = [];
//             let item = []
//             let list = []
//             $.each(result, function (key, data) {
//                 if (key != 'results') {
//                     return
//                 }
//                 else {
//                     items.push("<h2>" + Selectvalue + ':' + "</h2>")
//                     $.each(data, function (index, val) {
//                         console.log(val)
//                         $.each(val, function (el, part) {
//                             if (el === 'name' || el === 'title') {
//                                 item.push(`<li> ${el} : <span class='name'>${part}</span></li>`)
//                             }
//                         })
//                     })
//                 }
//             })
//             console.log(item)
//             $('.text').append(item)
//             $('.inner').append(items)
//             $('.name').on('click', function (event) {
//                 $('.lead').empty();
//                 $('.name').removeClass('unique');
//                 event.preventDefault()
//                 $(this).addClass('unique');
//                 let inputValue = $(this).text()
//                 console.log(inputValue)
//                 $.ajax({
//                     url: `https://swapi.dev/api/${Selectvalue}/?search=${inputValue}`,
//                     method: 'GET',
//                     success: function (final) {
//                         console.log(final)
//                         let list = []
//                         $.each(final, function (key, data) {
//                             console.log(data)
//                             if (key != 'results') {
//                                 return
//                             }
//                             else {
//                                 $.each(data, function (index, val) {
//                                     $.each(val, function (el, part) {
//                                         list.push(`<li> ${el} : <span class='info'>${part}</span></li>`)
//                                     }
//                                     )
//                                 })
//                             }
//                         })
//                         $('.lead').append(list).delay(1000).show(2000);
//                         $('.lead').on('click', function (event) {
//                             event.preventDefault()
//                             $('.lead').empty();
//                             $('.name').removeClass('unique');
//                         })
//                     }
//                 })
//             }
//             )
//         }
//     })
// })



// $('.submit').on('click', function (event) {
//     event.preventDefault()
//     let Selectvalue = $('select').val()
//     $.ajax({
//         url: `https://swapi.dev/api/${Selectvalue}`,
//         method: 'GET',
//         success: function (result) {
//             let items = [];
//             let item = []
//             let list = []
//             $.each(result, function (key, data) {
//                 console.log(data)
//                 if (key != 'results') {
//                     return
//                 }
//                 else {
//                     items.push("<h2>" + Selectvalue + ':' + "</h2>")
//                     $.each(data, function (index, val) {
//                         $.each(val, function (el, part) {
//                             if (el === 'name') {
//                                 item.push(`<li> ${el} : <span class='name'>${part}</span></li>`)
//                             }
//                         })
//                     })
//                 }
//             })
//             $('.text').append(item)
//             $('.inner').append(items)
//             $('.name').on('click', function (event) {
//                 event.preventDefault()
//                 $(this).addClass('unique');
//                 let inputValue = $(this).text()
//                 console.log(inputValue)
//                 $.ajax({
//                     url: `https://swapi.dev/api/${Selectvalue}/?search=${inputValue}`,
//                     method: 'GET',
//                     success: function (final) {
//                         console.log(final)
//                         let list = []
//                         $.each(final, function (key, data) {
//                             console.log(data)
//                             if (key != 'results') {
//                                 return
//                             }
//                             else {
//                                 $.each(data, function (index, val) {
//                                     $.each(val, function (el, part) {
//                                         list.push(`<li> ${el} : <span class='info'>${part}</span></li>`)
//                                     }
//                                     )
//                                 })
//                             }
//                         })
//                         $('.lead').append(list).delay(1000).show(2000);
//                         $('.lead').on('click', function (event) {
//                             event.preventDefault()
//                             $('.lead').empty();
//                             $('.name').removeClass('unique');
//                         })
//                     }
//                 })
//             }
//             )
//         }
//     })
// })













// $('.submit').on('click', function (event) {
//     let Selectvalue = $('select').val()
//     $.ajax({
//         url: `https://swapi.dev/api/${Selectvalue}`,
//         method: 'GET',
//         success: function (result) {
//             let items = [];
//             let item = []
//             let list = []
//             $.each(result, function (key, data) {
//                 console.log(data)
//                 if (key != 'results') {
//                     // items.push("<li>" + key + ':' + ' ' + data + "</li>")
//                     return
//                 }
//                 else {
//                     items.push("<li>" + key + ':' + "</li>")
//                     $.each(data, function (index, val) {
//                         $.each(val, function (el, part) {
//                             if (el === 'name') {
//                                 item.push(`<li> ${el} : <span class='name'>${part}</span></li>`)
//                                 // item.push("<li class='name'>" + el + ':' + ' ' + part + "</li>")
//                             }
//                             // else{
//                             //     list.push("<li class='list'>" + el + ':' + ' ' + part + "</li>")
//                             // }
//                         })
//                     })
//                 }
//             })
//             $('.text').append(item)
//             $('.inner').append(items)
//             $('.name').on('click', function (event) {
//                 let inputValue = $(this).text()
//                 console.log(inputValue)
//                 $.ajax({
//                     url: `https://swapi.dev/api/${Selectvalue}/?search=${inputValue}`,
//                     method: 'GET',
//                     success: function (final) {
//                         console.log(final)
//                         let list = []
//                         $.each(final, function (key, data) {
//                             console.log(data)
//                             if (key != 'results') {
//                                 return
//                             }
//                             else {
//                                 $.each(data, function (index, val) {
//                                     $.each(val, function (el, part) {
//                                         list.push(`<li> ${el} : <span class='info'>${part}</span></li>`)
//                                     }
//                                     )
//                                 })
//                             }
//                         })
//                         $('.lead').append(list)
//                     }
//                 })
//             }
//             )
//         }
//     })
// })


