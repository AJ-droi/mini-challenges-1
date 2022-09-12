/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let rows = array.length; //Get the row value of the array
    let columns = array[0].length; //Get the column value of the array
    const newArray = []; // create an empty array

    // Use a For Loop to create an empty Transpose Array using th Array Method
    for (let n = 0; n < columns; n++) {
      newArray[n] = Array(rows);
    }

    // Use a for Loop get the array value
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        //Assign the empty position to array value
        newArray[j][i] = array[i][j];
      }
    }
    console.log(newArray);
    return newArray;
     
    
}

transpose([
    [9, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 7],
    [1, 3, 1, 5],
  ]
);

module.exports = transpose;
