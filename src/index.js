module.exports = function reverse (n) {

    let str_n = Math.abs(n).toString();
    let arr = [];
    let arr1 = [];
    

    for(let i=0; i<str_n.length; i++){
        arr.push(str_n[i]);
        
    }
    for(let j=0; j<arr.length; j++){
        let a = arr.length-1;
        arr1[j] = arr[a-j];
    }
  return arr1.join('');
}
