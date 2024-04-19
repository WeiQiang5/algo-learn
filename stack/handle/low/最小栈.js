/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.min_stack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    this.min_stack.push(Math.min(this.stack[this.stack.length - 1],x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min_stack.pop()\
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let arr = this.stack.slice(0)
    return this.min_stack[this.min_stack.length - 1]
};

    // for(var i = 0; i < this.stack.length-1; i++) {
    //     if(min>this.stack[i]){
    //         min = this.stack[i];
    //     }
    // }

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
minStack = new MinStack();
minStack.push(-2);
minStack.push(2);
minStack.push(-3);
minStack.getMin();   
minStack.pop();
minStack.top();     


console.log(minStack.getMin());