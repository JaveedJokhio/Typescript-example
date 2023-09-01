import { Invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payments.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let doc:HasFormatter;
    if(type.value ==='invoice'){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }

    list.render(doc,type.value,'end');

})
// enums
// interface Resource <T>{
//     uid:number;
//     resourceType:number;
//     data:T;
// }
// const docOne: Resource<object>={
//     uid:1,
//     resourceType:3,
//     data:{title:"name of shoan"}
// }

// const docTwo: Resource<object>={
//     uid:10,
//     resourceType:4,
//     data:{name:"Yoshi"}
// }



// GENERICS

// const addUID=<T extends {name:string}>(obj: T)=>{
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj,uid}
// }
// let docOne = addUID({name:'javi',age:40});
// console.log(docOne.name)

// with interfaces
// interface Resource <T>{
//     uid:number;
//     resourceName:string;
//     data:T;
// }
// const docThree: Resource<object>={
//     uid:1,
//     resourceName:"person",
//     data:{name:"shoan"}
// }

// const docFour: Resource<string[]>={
//     uid:2,
//     resourceName:"shooping list",
//     data:['breed','milk','roll']
// }
// console.log(docThree,docFour)