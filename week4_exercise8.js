function tukarBesarKecil(kalimat) {
    var tampung = '';

    for (var i=0; i < kalimat.length; i++) {
        var sentence = kalimat[i]
        if (sentence === kalimat[i].toUpperCase()) {
            tampung += sentence.toLowerCase();
            // console.log(tampung)
        } else if ( sentence === kalimat[i].toLowerCase()) {
            tampung += sentence.toUpperCase();
        } else {
            tampung += sentence;
        }
    } return tampung;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"