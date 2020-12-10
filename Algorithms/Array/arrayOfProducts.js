function arrayOfProducts(array) {
  // Write your code here.
  let output = [];
  let leftProducts = [1];
  let runningLeftProduct = 1;
  for (let i = 1; i < array.length; i++) {
    runningLeftProduct *= array[i - 1];
    leftProducts.push(runningLeftProduct);
  }

  let rightProducts = new Array(array.length);
  let runningRightProdcuct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = runningRightProdcuct;
    output[i] = leftProducts[i] * rightProducts[i];
    runningRightProdcuct *= array[i];
  }

  // for (let i = 0; i < array.length; i++) {
  //   output.push(rightProducts[i] * leftProducts[i]);
  // }

  return output;
}

let array = [5, 1, 4, 2];
console.log(arrayOfProducts(array));

let array2 = [];
array2[9] = 100;

obj = {
  a: {hello: 'hi'},
  b: 
}

function returnArray(obj){

}