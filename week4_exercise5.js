function ubahHuruf(kata) {
    var tampung = ''
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (var i=0; i < kata.length; i++) {
        for (var j=0; j < alphabet.length; j++) {
            if(kata[i] === 'z') {
                tampung += 'a'
            } else if (kata[i] === alphabet[j]) {
                tampung += alphabet[j+1]
            }
        }
    } return tampung;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu