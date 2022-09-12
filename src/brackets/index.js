/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    // Convert String to Array
    let arr = str.split(''); 
    
    // Check if the Array's Length is Even

    // If false; return invalid
    if (arr.length % 2 !== 0){
        return("invalid")   
    }

    // If True; Check if the String starts with an Opening Bracket and end with an Opening Bracket; 
    // If False; return invalid
    else if((str.startsWith('}') && str.endsWith('{')) || (str.startsWith(')') && str.endsWith('(') )|| (str.startsWith(']') && str.endsWith('[') )){
        console.log('invalid')
        return('invalid');
    }

    // If True; Filter Arrays according to its Bracket Type
    else {
        let curveArrayLeft = arr.filter(newArr => newArr.includes('(') );
        let squareArrayLeft = arr.filter(newArr => newArr.includes('[') );
        let curlyArrayLeft = arr.filter(newArr => newArr.includes('{') );
        let curveArrayRight = arr.filter(newArr => newArr.includes(')') );
        let squareArrayRight = arr.filter(newArr => newArr.includes(']') );
        let curlyArrayRight = arr.filter(newArr => newArr.includes('}') );

        // if length of opposite brackets of same type is equal, return valid
        if ((curveArrayLeft.length === curveArrayRight.length) && (squareArrayLeft.length === squareArrayRight.length) && (curlyArrayLeft.length === curlyArrayRight.length) ){
            console.log('valid');
            return('valid');
        }
        
        //  else return invalid
        else{
            console.log('invalid');
            return('invalid');
        }
    }
    
}

isValid("{{[][()]}{[][()]}{[][()]}}");

module.exports = isValid;
