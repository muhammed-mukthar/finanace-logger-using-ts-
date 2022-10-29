

import {Invoice} from './models/invoice.js'
import { Payment } from './models/payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './models/ListTemplate.js';
const form=document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type=document.querySelector('#type') as HTMLSelectElement
const tofrom=document.querySelector('#tofrom') as HTMLInputElement

const  details=document.querySelector('#details') as HTMLInputElement

const  amount=document.querySelector('#amount') as HTMLInputElement

//list temlate instance

const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul)

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:HasFormatter;
    if(type.value ==='invoice'){
        doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        doc=new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }
 list.render(doc,type.value,'end')
})

/* ------------------------------- //generics ------------------------------- */

const addUID=<T extends {name:string}>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return{... obj, uid};
    }
    let docOne = addUID({name: 'yoshi' , age: 40});
   

    console.log(docOne.age);
    // with interfaces
    // interface Resource<T> {
    // uid:number;
    // resourcesName:string;
    // data:T,
    // }

    // const docThree:Resource<object>={
    //     uid:1,
    //     resourcesName:'person',
    //     data:{name:'mukthar'}
    // }

    // const docFour: Resource<string[]>={
    //     uid:2,
    //     resourcesName:'shoppinList',
    //     data:['test']
    // }

    // console.log(docThree,docFour);
    

        