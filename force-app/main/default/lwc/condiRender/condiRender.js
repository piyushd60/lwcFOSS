import { LightningElement,track } from 'lwc';

export default class CondiRender extends LightningElement {
    @track check;
    @track cityList = ['ALD','GNA','BDN'];
    checkHndlr(event){
        this.check = event.target.checked;
    }
}