function digitPerkalianMinimum(angka) {
  var array = [];
    for (var i=0; i <=angka; i++) {
      for (var j=0; j <= angka; j++) {
        if(i*j === angka) {
          array.push([i]+[j])
        }
      }
    }

    var result = 10;
    for (var k=0; k < array.length; k++) {
     if(result > array[k].length) {
       result = array[k].length
     }
    }
    return result
  }
  
    // you can only write your code here!
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  // console.log(digitPerkalianMinimum(90)); // 3
  // console.log(digitPerkalianMinimum(20)); // 2
  // console.log(digitPerkalianMinimum(179)); // 4
  // console.log(digitPerkalianMinimum(1)); // 2