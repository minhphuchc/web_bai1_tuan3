function palindrome(str) {
    let str_new = ''
  
    for(let i = 0; i < str.length; i++) {
        if( (str[i] >= '0' && str[i] <= '9') ||
            (str[i] >= 'a' && str[i] <= 'z') ||
            (str[i] >= 'A' && str[i] <= 'Z')){

            str_new += str[i]
        }
    }

    str_new = str_new.toUpperCase()

    for(let i = 0; i < Math.floor(str_new.length/2); i++){
      if(str_new[i] != str_new[str_new.length-i-1] ){
        return false
      }
    }
    return true;
}

console.log(palindrome("not a palindrome"));