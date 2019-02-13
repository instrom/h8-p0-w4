function changeMe(arr) {
    var no = 0;
    var name = '';

    for (var i=0; i < arr.length; i++) {
        no++;
        name = arr[i][0] + ' ' + arr[i][1]
        // console.log(name);
        var objArtis = {
        }
        objArtis.firstName = arr[i][0];
        objArtis.lastName = arr[i][1];
        objArtis.gender = arr[i][2];

        if (arr[i][3] === undefined) {
            objArtis.age = 'Invalid Birth Year';
        } else {
            objArtis.age =  2018 - arr[i][3]
        }
        console.log(no + '. ' + name)
        console.log(objArtis)
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""