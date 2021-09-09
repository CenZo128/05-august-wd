// console.log("JS DOM")

// let h1 = document.querySelectorAll('h1');
// h1.innerHTML = "Tests"
// h1[0].innerHTML = "Tests"
// h1[1].innerHTML = "Tes"
// h1[2].innerHTML = "Toast"
// console.log(h1)
// for(let i = 0; i < h1.length; i++){
//     h1[i].innerHTML = "Tests";
// }

// let greeting = document.getElementById('greeting')
// let afternoon = document.getElementById('afternoon')
// let name = document.getElementById('name')

// greeting.innerHTML = "Hello, Gan";
// greeting.style.fontWeight = "bold";
// afternoon.style.color = "red";
// name.style.fontVariant = "small-caps"

// console.log(greeting)

// function clickMe(){
//     // alert("Ini adalah Button Blue yes")
//     // console.log("btnBlue")
//     let konfirmasi = confirm("Are you sure?");
//     if(konfirmasi === true){
//         // console.log("True")
//         let konfirmasiAgain = confirm("Are you really sure?");
//         if(konfirmasiAgain === true){
//             console.log("Yes")
//         }else{
//             console.log("False")
//         }
//     }else{
//         console.log("False")
//     }
// }

// let btnBlue = document.getElementById('buttonBlue');
// btnBlue.addEventListener('click', clickMe)
// // console.log(btnBlue)

// let total = document.getElementById('total')
// let btnPlus = document.getElementById('btn-plus');
// let btnMinus = document.getElementById('btn-minus');

// let indexTotal = 0;
// btnPlus.addEventListener('click', btnPlusHandler)
// btnMinus.addEventListener('click', btnMinusHandler)

// function btnPlusHandler(){
//     if(indexTotal < 10){
//         indexTotal++;
//         total.innerHTML = indexTotal
//     }else{
//         alert("Total max 10")
//     }
// }

// function btnMinusHandler(){
//     if(indexTotal > 0 ){
//         indexTotal--;
//         total.innerHTML = indexTotal
//     }else{
//         alert("Total min 0")
//     }
// }

// function getForm(e) {
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let age = document.getElementById('age').value;

//     console.log({
//         name, email, age
//     })
//     alert(name + " " + email + " " + age)

// }

// let submitBtn = document.getElementById('submitBtn')
// submitBtn.addEventListener('click', e => getForm(e))

$(document).ready(function () {
    // Todos berfungsi sebagai "database"
    let todos = [
        {
            id: 1,
            task: "Belajar JS DOM",
            status: true
        }
    ]

    // berfungsi untuk generate todos dan dimasukkan ke dalam html (table)
    function getTodos() {
        // mengambil element tbody
        let boxTable = $('#t-body')
        // looping todos untuk meng generate list to dan di append ke dalam HTML
        for (let i = 0; i < todos.length; i++) {
            boxTable.append(`
                <tr>
                    <td>${todos[i].id}</td>
                    <td>${todos[i].task}</td>
                    <td>~</td>
                </tr>
            `)
        }
    }

    // menambahkan todo ke dalam let todos dan html (table)
    function addTodo(e) {
        e.preventDefault(); // untuk mencegah refresh
        // untuk mengambil value dari input
        let todoItem = $('#add-todo').val()
        let id;
        if (todos.length === 0) {
            id = 1
        } else {
            // untuk generate todo id secara auto
            id = todos[todos.length - 1].id + 1;
        }
        // memasukkan ke dalam array of object todos
        todos.push({
            id,
            task: todoItem,
            status: false
        })
        console.log(todos);

        // mengambil tbody
        let boxTable = $('#t-body')
        // append : menambahkan element HTML
        boxTable.append(`
            <tr>
                <td>${id}</td>
                <td>${todoItem}</td>
                <td>~</td>
            </tr>
        `)

    }
    // untuk mengambil addButton dan memberikan addEventListener click
    let addBtn = $('#add-btn').click(e => addTodo(e))
    // invoke function agar langsung di jalankan / todo list nya terambil langsung
    getTodos()

    // console.log(todoItem)
})