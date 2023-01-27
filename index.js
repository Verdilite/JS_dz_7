//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
const opens = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//Знайти суму та кількість позитивних елементів.
let openUp = []
let sumUp= opens.reduce(function(sum, elem) {
	if (elem >= 0) {
		return sum + elem;
	} else {
		return sum;
	}
});
console.log(sumUp);

        //разделю на 2 масива для некоторых заданий дальше.
    pOpen = [],
    nOpen = []; 
for( i = 0; i < opens.length; i++) { 
    opens[i] >= 0 ? pOpen.push(opens[i]) : nOpen.push(opens[i]);
}

console.log(pOpen.length)

//Знайти мінімальний елемент масиву та його порядковий номер.
const minik = Math.min.apply(null, opens);
let nMinik = opens.indexOf(minik)+1
console.log('минимальное значения масива: '+minik  + ', находится в масиве на  ' + nMinik +" месте");


//Знайти максимальний елемент масиву та його порядковий номер.
const maxik = Math.max.apply(null, opens);
let nMaxik = opens.indexOf(maxik)+1
console.log('максимальное значения масива: '+maxik  + ', находится в масиве на  ' + nMaxik +" месте");


//Визначити кількість негативних елементів.
console.log(nOpen.length)


//Знайти кількість непарних позитивних елементів.
console.log( pOpen.filter(elem => elem % 2 !== 0).length );

//Знайти кількість парних позитивних елементів.
console.log( pOpen.filter(elem => elem % 2 == 0).length );

//Знайти суму парних позитивних елементів.
let sum=0, sum2=0;
for (let i=0; i < pOpen.length; i++){
    if (pOpen[i] % 2 == 0){
        sum += pOpen[i];
    }
    sum2 += pOpen[i];
}
console.log(sum)
//Знайти суму непарних позитивних елементів.
console.log(sum2)

//Знайти добуток позитивних елементів.
console.log(pOpen.reduce((acc, rec) => acc * rec))

//Знайти найбільший серед елементів масиву, ост альні обнулити.

    // первый вариант просто создать новый масив и внести в него максимальное значение
let newOpen = [] 
newOpen.push(maxik)
console.log(newOpen)

let mm = [Math.max.apply(null, opens)]
console.log(mm)
         //вариант ставить на 1 место нужный елемент и очищать последующие после него.
  

opens.sort(function(x,y){ 
    return x == maxik ? -1 : y == maxik ? 1 : 0; 
});
opens.splice(1)
console.log(opens)
