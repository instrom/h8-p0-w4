function urutkanAbjad(str) {
    var string = '';
    var arr = [];
    for (var i=0; i < str.length; i++) {
        arr.push(str[i])
    }
    var temp = 0;
    for (var j=0; j < arr.length; j++) {
      for (var k=0; k < arr.length - j - 1; k++) {
        if(arr[k] > arr[k+1]) {
          temp = arr[k];
          arr[k] = arr[k+1];
          arr[k+1] = temp
        }
      }
    }
    for (var l=0; l < arr.length; l++) {
      string+= arr[l]
    }
    return string
    
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'