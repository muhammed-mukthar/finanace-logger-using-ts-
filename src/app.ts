//classes
class Invoice{
   
// readonly  client:string
//    private details:string
//    public amount:number
constructor(
    readonly client:string,
    private details:string,
    public amount:number
    ){
     
        
}
    format(){
        return `${this.client} owes ${this.amount} for ${this.details} `
    }
}

const invOne=new Invoice('mario','work on the mario website',200)

const invTwo=new Invoice('luigi','work on the luigui website',500)

console.log(invOne,invTwo);

let invoices:Invoice[]=[]
invoices.push(invOne)
invoices.push(invTwo);


invoices.forEach(inv=>{

    console.log(inv.amount,inv.format(),inv.client);
    
})

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