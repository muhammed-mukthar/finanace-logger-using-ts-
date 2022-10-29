

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
let values:[string,string,number]
     values=[tofrom.value,details.value,amount.valueAsNumber]
    let doc:HasFormatter;
    if(type.value ==='invoice'){
        doc=new Invoice(...values)
    }else{
        doc=new Payment(...values)
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
    

    /* ---------------------------------- Enums --------------------------------- */

    // enum ResourceType {Book,Author,Film,Director,Person}

    // interface Resource<T> {
    //     uid:number;
    //     resourceType:ResourceType;
    //     data:T,
    //     }
    
    //     const doc11:Resource<object>={
    //         uid:1,
    //         resourceType:ResourceType.Author,
    //         data:{title:'mukthar is here'}
    //     }
    
    //     const doc12:Resource<object>={
    //         uid:1,
    //         resourceType:ResourceType.Book,
    //         data:{title:'mukthar is here'}
    //     }
    //     const doc13:Resource<object>={
    //         uid:10,
    //         resourceType:ResourceType.Film,
    //         data:{name:'yoshi'}
    //     }
    
    // console.log(doc11,doc12);
    
        
    /* -------------------------------- //tuples -------------------------------- */

//types are fixed when assigned to a tuple

    let arr=['rty',23,true]
    arr[0]=false;
    arr[1]='yoshi'
    arr=[30,false,'yoshi']

    let tup:[string,number,boolean]=['ryu',26,true]

    tup[0]='hallo'


    // let student:[string,number];
    // student=['chun-li',22]