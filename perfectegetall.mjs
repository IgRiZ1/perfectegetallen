import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output})



let keuzegetallen = parseFloat(await userInput.question(' geef een getal in? ')) ; 
perfectegetall(keuzegetallen);


function perfectegetall(keuzegetallen){

for(let i = 1 ; i <  keuzegetallen ; i++){

    let som = 0 ; 

    for(let j =1; j < i ; j++){

            if (i % j == 0 ){

                som += j ; 
            }
 }           if (som == i ) { 
        console.log(i + ' is een perfecte getall');
    
 }

 }
}