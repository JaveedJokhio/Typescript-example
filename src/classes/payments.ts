import {HasFormatter} from '../Interfaces/HasFormatter.js'
// classes 
export class Payment implements HasFormatter{
  
        constructor(
            readonly recipient:string,
            private details:string,
            public amount:number
    
        ){
            
        }
    
        format(){
            return `${this.recipient} is owed RS:${this.amount} for ${this.details}`
        }
    }
    