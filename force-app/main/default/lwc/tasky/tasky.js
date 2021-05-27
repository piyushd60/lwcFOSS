import { LightningElement,track } from 'lwc';

export default class Tasky extends LightningElement {
    @track dyn = 'Tasky';
    chHandler(event){
        this.dyn = event.target.value;
    }
}