//задание 1

const extractNumbers = (str) => {
    return str.match(/\d+/g)?.map(Number) || [];
};

console.log(extractNumbers("a1fg5hj6"));

//задание 2

function fibonacciWithDelay(prev = 0, curr = 1) {
    if (prev > 144) return;

    console.log(prev);

    setTimeout(() => {
        fibonacciWithDelay(curr, prev + curr);
    }, 1000);
}

fibonacciWithDelay();


//задание 3
const fetchProductTitles = async () => {
    try {

        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const products = await response.json();


        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {

        console.error('Произошла ошибка:', error.message);
    }
};

fetchProductTitles();

//задание 4

        const colors = ['red', 'green', 'blue', 'yellow', 'purple'];


        const container = document.getElementById('button-container');


        colors.forEach(color => {
            const button = document.createElement('button');
            button.textContent = color;
            button.dataset.color = color;
            container.appendChild(button);
        });


        container.addEventListener('click', (event) => {

            if (event.target.tagName === 'BUTTON') {
                const selectedColor = event.target.dataset.color;
                document.body.style.backgroundColor = selectedColor;
            }
        });

//задание 5

        const square = document.getElementById('square');
        const button = document.getElementById('toggle-button');

        button.addEventListener('click', () => {
            if (square.style.display === 'none') {

                square.style.display = 'block';
                button.textContent = 'Скрыть';
            } else {

                square.style.display = 'none';
                button.textContent = 'Показать';
            }
        });

// задание 6

         const counterElement = document.getElementById('counter');

         let count = 0;

         const intervalId = setInterval(() => {
             count += 1;
             counterElement.textContent = count;


             if (count >= 100) {
                 clearInterval(intervalId);
             }
         }, 1);

//задание 7
const btn = document.querySelector('.button')

btn.onclick = async () => {
    const response = await fetch('data.json')
    const data = await response.json()
    console.log(data)
}
