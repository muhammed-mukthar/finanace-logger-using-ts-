



// let docOne:HasFormatter;
// let docTwo:HasFormatter;

// docOne=new Invoice('yoshi','web work',222)
// docTwo=new Payment('lyigi','work on luigui website',300)


// let docs:HasFormatter[]=[]
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs);





// const invOne=new Invoice('mario','work on the mario website',200)

// const invTwo=new Invoice('luigi','work on the luigui website',500)

// console.log(invOne,invTwo);

// let invoices:Invoice[]=[]
// invoices.push(invOne)
// invoices.push(invTwo);


// invoices.forEach(inv=>{

//     console.log(inv.amount,inv.format(),inv.client);
    
// })

import {Invoice} from './models/invoice.js'
import { Payment } from './models/payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
const form=document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type=document.querySelector('#type') as HTMLSelectElement
const tofrom=document.querySelector('#tofrom') as HTMLInputElement

const  details=document.querySelector('#details') as HTMLInputElement

const  amount=document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:HasFormatter;
    if(type.value ==='invoice'){
        doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        doc=new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }
    console.log(doc);
    
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber);
    
})