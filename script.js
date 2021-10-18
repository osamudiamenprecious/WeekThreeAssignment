// getting Element by id form my html document

let plusbut = document.querySelector('#plus-but');
let minusbut = document.querySelector('#minus-but');
let qtybox = document.querySelector('#qtybox');

// adding listener event to button click 

// increment button
plusbut.addEventListener('click', () => {
    qtybox.value = parseInt(qtybox.value) + 1;

});


// decrement buttion
minusbut.addEventListener('click', () => {
    if (qtybox.value <= 0) {
        qtybox.value = 0
    } else {
        qtybox.value = parseInt(qtybox.value) - 1;

    }
});


// sweat alert button click
let btnshow = document.querySelector('#mkbut');
btnshow.addEventListener('click', () => {
    swal({
        title: "Good job!",
        text: "Your Space Has Been Successfully Booked!",
        icon: "success",
    });
});