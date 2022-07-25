const keys = document.querySelector('.calcButtonsContainer');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if(!target.matches('button')){
            return;
        }
        else{
            // pass to parse method
            calculate.parseInput(value)
            console.log(value)
        }
    })

const calculate = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
        if(this.displayText === '0'){
            this.displayText === ''
        }
        // have any of the "special" buttons been clicked
        switch(value){
            case '=':
                //Calculate answer
                break;
            case 'clearButton':
                //clear screen and stored value
                break;
            case '.':
                if(this.displayText === '0'){
                    //pass '0' into add text method
                }else{
                    //add value to text string
                }
        }
    }
}