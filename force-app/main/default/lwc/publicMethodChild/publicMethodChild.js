import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['red'];

    get options() {
        return [
            { label: 'Red Marker', value: 'red' },
            { label: 'Black Marker', value: 'Black' },
        ];
    }

    ch(){
        console.log(value);
    }

    @api 
    selectCheckBox(checkboxValue){
        const selectedCheckbox = this.options.find(checkbox =>{
            return checkboxValue === checkbox.value;
        })
        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "Successfuly checked";
        }
            return "No checkbox found";
    }


}