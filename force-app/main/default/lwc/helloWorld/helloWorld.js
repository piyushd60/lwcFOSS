import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   @track dyn = "Scratch";
   greetingChange(event){
    this.dyn = event.target.value;
   }
}