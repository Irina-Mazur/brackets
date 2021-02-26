module.exports = function check(str, bracketsConfig) {
    let stack = [];
    bracketsConfig = bracketsConfig.reduce((acc,val) => {
        acc[val[0]] = val[1];
        return acc;
    },{});
  
    for (let i = 0; i < str.length; i++) {
        for (let key in bracketsConfig) {
          if (key === bracketsConfig[key] && stack.length && stack[stack.length - 1] === key) {
              stack.pop();
              continue;
            }
    
            if ( str[i] === key ) {
                stack.push(str[i]);
                break;
            }
    
            if (str[i] === bracketsConfig[key]) {
                if (stack[stack.length-1] === key) {
                    stack.pop();
                    break;
                } 
                else {
                    return false;
                }
            }
        }
      
      }
    return !stack.length;
}
  
  
  
