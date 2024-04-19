/**
 * @param {string} s
 * @return {boolean}
 */
s ="()"
var isValid = function(s) {
    if(s.length === 0) return true;
    if(s.length % 2 !==0) return false;
    let stack = []
    let map = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    
    for(let i=0;i<s.length;i++) {
        let item = s[i]
        let peek = stack[stack.length - 1]
        if(map[item]===peek&&peek){
            stack.pop()
        }else{
            stack.push(item)
        }
    }
    console.log(stack);
    return stack.length===0
};
console.log(isValid(s));
