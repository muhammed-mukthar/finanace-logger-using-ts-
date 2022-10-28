//classes
class Invoice{
    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
        
    }
    client:string
    details:string
    amount:number

    format(){
        return `${this.client} owes `
    }
}

const invOne=new Invoice('mario','work on the mario website',200)

const invTwo=new Invoice('luigi','work on the luigui website',500)

console.log(invOne,invTwo);

let invoices:Invoice[]=[]
invoices.push(invOne)
invoices.push(invTwo);

console.log(invoices);


invOne.client='yoshi'
invOne.amount=400;
console.log(invOne,invTwo);


const form=document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type=document.querySelector('#type') as HTMLSelectElement
const tofrom=document.querySelector('#tofrom') as HTMLInputElement

const  details=document.querySelector('#details') as HTMLInputElement

const  amount=document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    console.log(type.value,tofrom.value,details.value,amount.valueAsNumber);
    
})