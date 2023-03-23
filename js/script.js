const list = document.querySelector('.list-squares');

for (i = 1; i <= 100; i++) {
    
    let square

    if (i % 3 == 0 && i % 5 == 0) {
        square = `<li class="square square-fizzbuzz">FIZZBUZZ</li>`;
    }
    else if (i % 3 == 0) {
        square = `<li class="square square-fizz">FIZZ</li>`;
    }
    else if (i % 5 == 0) {
        square = `<li class="square square-buzz">BUZZ</li>`;
    }
    else{
        square = `<li class="square">${i}</li>`;
    }

    list.innerHTML += square;
}