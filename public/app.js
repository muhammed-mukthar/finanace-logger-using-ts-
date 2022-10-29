import { Invoice } from './models/invoice.js';
import { Payment } from './models/payments.js';
import { ListTemplate } from './models/ListTemplate.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list temlate instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
/* ------------------------------- //generics ------------------------------- */
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
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
