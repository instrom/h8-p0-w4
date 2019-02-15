function digitPerkalianMinimum(angka) {
    var arr = [];
    for (var i = 0; i <= angka; i++){
      for (var j = 0; j <= angka; j++){
        if (i * j === angka) {
          arr.push([i]+[j]);
        }
      }
    }
    var result = 10;
    for (var k = 0; k < arr.length; k++) {
      if (result > arr[k].length) {
        //console.log(arr[k].length + ' ini length arr[k]')
        result = arr[k].length;
        //console.log('ini lengthnya result' + result)
      }
    }
    return result;
    // console.log(result);  
  }
  
    // you can only write your code here!
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2