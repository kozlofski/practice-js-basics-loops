const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if (randomNumber > 5) {
    let output = '';
    for(let i = 5; i <= randomNumber; i++) {
        output += i + ", ";
    }
    console.log(output);
} else {
    console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}
