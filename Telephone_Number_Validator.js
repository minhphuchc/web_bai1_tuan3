function telephoneCheck(str) {
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
      rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str) || rex2.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(telephoneCheck("555-555-5555"));