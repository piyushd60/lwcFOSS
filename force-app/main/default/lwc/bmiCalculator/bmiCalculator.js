import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = "BMI Calculater";
    @track bmiData = {
        weight : 0,
        height : 0,
        result : 0
    };
    BMI(){
        try{
            this.bmiData.result = this.bmiData.weight/(this.bmiData.height * this.bmiData.height);
        }catch(error){
            this.bmiData.result = 'Undefined';
        }
    }
    get bmiValue(){
        if(this.bmiData.result === "undefined"){
            return "";
        }
        return `This is the BMI: ${this.bmiData.result}`;
    }
    weightHandler(event){
        this.bmiData.weight = parseFloat(event.target.value);
    }
    heightHandler(event){
        this.bmiData.height = parseFloat(event.target.value);
    }
}