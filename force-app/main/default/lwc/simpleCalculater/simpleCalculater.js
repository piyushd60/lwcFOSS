import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track showPreviousResult = false;
    @track previousResults = [];

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        /* eslint-disable no-console */
        console.log(event.target.name);
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        /* eslint-disable no-console */
         console.log(event.target.value);
        } else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        /* eslint-disable no-console */
         console.log(event.target.value);
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;
        this.previousResults.push(this.currentResult);
        /*eslint-disable no-console */
        console.log(this.previousResults);
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResults.push(this.currentResult);
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}x${secondN} is ${firstN*secondN}`;
        this.previousResults.push(this.currentResult);
    }

    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.previousResults.push(this.currentResult);
    }
    showPreviousResults(event){
        this.showPreviousResult = event.target.checked;
    }

}