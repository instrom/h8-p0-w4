function shoppingTime(memberId, money) {
    var sisa = money;
    var tampung = [];

    for (var i=0; i < 5; i++) {
        if (sisa >= 1500000) {
            tampung.push('Sepatu brand Stacattu');
            sisa -= 1500000;
        } else if ( sisa >= 500000) {
            tampung.push('Baju Zoro');
            sisa -= 500000
        } else if ( sisa >= 250000) {
            tampung.push('Baju H&N');
            sisa -= 250000;
        } else if ( sisa >= 175000) {
            tampung.push('Sweater brand Uniklooh')
            sisa -= 175000;
        } else if ( sisa >= 50000) {
            tampung.push('Casing Handphone')
            sisa -= 50000;
            break;
        }
    // you can only write your code here!
  }

  var objBarang = {

  }

  objBarang.memberId = memberId;
  objBarang.money = money;
  objBarang.listPurchased = tampung;
  objBarang.changeMoney = sisa;

  if (memberId === '' || memberId === undefined && money === undefined) {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if (money < 50000) {
      return 'Mohon maaf, uang tidak cukup'
  }

  return objBarang;
}



  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
  

  