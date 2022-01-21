//Arrays
const symbols_array = ["!", "£", "$", "%", "&", "^", "#", "|", "@", "~", "<", ">", "?", "'"];
const upper_array = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", 
               "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number_array = [0,1,2,3,4,5,6,7,8,9];
const lower_array = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
               
const arrays = [symbols_array, upper_array];
//check boxes
const symbols = document.getElementById('symbols');
const number = document.getElementById('number');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');

//elements
const output = document.getElementById('output');
const length = document.getElementById('length');

//final array where we store the final output
let finalOutput = [];

const submit = document.getElementById('submit').addEventListener("click",(e)=>{
    //Output area is reset
    output.value = "";
    finalOutput = [];

    /**
     * CODE FOR IF ONLY 1 CHECKBOX IS TICKED
     */

    //If symbols is ONLY ticked
    if((symbols.checked == true) && (upper.checked == false) && (number.checked == false)){
       for(let i = 0; i< length.value;i++){
            let index = (Math.floor(Math.random() * (symbols_array.length)));
            finalOutput.push(symbols_array[index]);
       }

       output.value = finalOutput.join('');
    }

    //If upper is ONLY ticked
    if((upper.checked == true) && (symbols.checked == false) && (number.checked == false)){
        for(let i = 0; i< length.value;i++){
             let index = (Math.floor(Math.random() * (upper_array.length)));
             finalOutput.push(upper_array[index]);
        }
        output.value = finalOutput.join('');
    }

    //If number is ONLY ticked
    if((number.checked == true) && (symbols.checked == false) && (upper.checked == false)){
        for(let i = 0; i< length.value;i++){
             let index = (Math.floor(Math.random() * (number_array.length)));
             finalOutput.push(number_array[index]);
        }
        output.value = finalOutput.join('');
    }

    //If lower is ONLY ticked
    if((lower.checked == true) && (symbols.checked == false) && (upper.checked == false)){
        for(let i = 0; i< length.value;i++){
             let index = (Math.floor(Math.random() * (lower_array.length)));
             finalOutput.push(lower_array[index]);
        }
        output.value = finalOutput.join('');
    }

    /**
     * CODE FOR IF ONLY 2 CHECKBOXES ARE TICKED
     */

    //If symbols & upper is ticked
    if((upper.checked == true) && (symbols.checked == true)){
        for(let i = 0; i < length.value;i++){
            let index = (Math.floor(Math.random() * length));
            let random = (Math.floor(Math.random() * 2));
            if(random == 0){
                finalOutput.push(symbols_array[i]);
            }
            if(random == 1){
                finalOutput.push(upper_array[i]);
            }
        }
        output.value = finalOutput.join('');
    }

    //If symbols & numbers is ticked
    if((number.checked == true) && (symbols.checked == true)){
        for(let i = 0; i < length.value;i++){
            let index = (Math.floor(Math.random() * length));
            let random = (Math.floor(Math.random() * 2));
            if(random == 0){
                finalOutput.push(symbols_array[i]);
            }
            if(random == 1){
                finalOutput.push(number_array[i]);
            }
        }
        output.value = finalOutput.join('');
    }

    //If symbols & lower is ticked
    if((lower.checked == true) && (symbols.checked == true) && (upper.checked == false) && (number.checked == false)){
        for(let i = 0; i < length.value;i++){
            let index = (Math.floor(Math.random() * length));
            let random = (Math.floor(Math.random() * 2));
            if(random == 0){
                finalOutput.push(lower_array[i]);
                
            }
            if(random == 1){
                finalOutput.push(symbols_array[i]);
                
            }
            //alert(finalOutput)
        }
        output.value = finalOutput.join('');
    }

    /**
     * CODE FOR IF ONLY 3 CHECKBOXES ARE TICKED
     */

    //If symbols, upper and number are ticked
    if((number.checked == true) && (symbols.checked == true) && (upper.checked == true)){
        for(let i = 0; i < length.value;i++){
            let index = (Math.floor(Math.random() * length));
            let random = (Math.floor(Math.random() * 3));
            if(random == 0){
                finalOutput.push(symbols_array[i]);
            }
            if(random == 1){
                finalOutput.push(upper_array[i]);
            }
            if(random == 2){
                finalOutput.push(number_array[i]);
            }
        }
        output.value = finalOutput.join('');
    }
});