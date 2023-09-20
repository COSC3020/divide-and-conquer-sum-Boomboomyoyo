function divideAndConquerSum(list) {
    // Set up base cases for lists of lengths less than 3. Empty lists won't work with the way I set
    // this up, and it is easier to set two base cases for lists of length 1 & 2 than to think it through
    // I will probably come back and fix this later, though I'm not sure how to do that at the moment
    if(list.length === 0){
        //console.log("Test 1");
        return 0;
    }
    if(list.length === 1){
        //console.log("Test 2");
        return list[0];
    }
    if(list.length === 2) {
        //console.log("Test 3");
        return list[0] + list[1];
    }
    // Set up four point to denote the starting and ending points of the three sections of the array
    // Due to how JavaScripts splice works, I need to add 1 to b & c so the values at the indexes
    // representing one third and two thirds of the array will be included in the slice.
    // D doesn't matter, as for the third section I can just slice to the end. I could remove d as a
    // variable, but left it in for readability of code
    a = 0;
    d = list.length -1;
    b = Math.floor(d / 3) + 1;
    c = Math.floor(d * (2/3)) + 1;

    //console.log("Break")
    return divideAndConquerSum(list.slice(a,b)) + divideAndConquerSum(list.slice(b,c)) + divideAndConquerSum(list.slice(c));
    
}

/*
Once had all the if statements above in here, but realized I don't need a helper function anymore
function dandcSum(list) {
        divideAndConquerSum(list);
    

}*/

/* References:
Lecture slides on Mergesort for an example of a helper function

For understanding JavaScript slicing syntax
https://www.w3schools.com/js/js_array_methods.asp
*/