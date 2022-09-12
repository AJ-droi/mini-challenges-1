/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    // Use a function that use switch statement to return the numerical value of each roman numeral.
    const checkRomanNumeral = (num) => {
        switch(num){
            case 'I':
                return 1;
                break;
            case 'V':
                return 5;
                break;
            case 'X':
                return 10;
                break;
            case 'L':
                return 50;
                break;
            case 'C':
                return 100;
                break;
            case 'D':
                return 500;
                break;
            case 'M':
                return 1000;
                break;
        }
    } 

    let value = 0; //Initialize a count

    // Convert the string variable to an Array
    let arr = roman.split('');

    //Use a For Loop to iterate through array values
    for (let i=0; i<arr.length; i++){
        
        // Use the checkRomanNumeral Function to return and compare the numerical value of the array;

        // If the previous array value has a lesser Numerical value than next array value; 
        if( checkRomanNumeral(arr[i]) < checkRomanNumeral(arr[i+1])){
            // subtract the  previous value from the VALUE COUNT
            value -= checkRomanNumeral(arr[i])
        }
        
        // else add 
        else{
            value += checkRomanNumeral(arr[i]);
        }
        
    }
    console.log(value);
    return value;
   
}


romanToDecimal("MMCDXLVIII");

module.exports = romanToDecimal;
