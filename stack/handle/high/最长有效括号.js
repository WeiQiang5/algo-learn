/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s.length === 0 || s.length === 1) return 0
    let stack = []
    let map = {
        ")":"("
    }
    for(let i = 0; i < s.length; i++){
        let item = s[i]
        
    }
};