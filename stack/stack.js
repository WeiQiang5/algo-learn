// javascript实现栈结构

class Stack{
    constructor(){
        this.items = []
    }
    // 入栈
    push(element){
        this.items.push(element)
    }
    // 出栈操作
    pop(){
        if(this.empty()){
            throw new Error("stack is empty")
        }
        this.items.pop()
    }
    // 检测是否为空
    empty(){
        return this.items.length == 0
    }
    // 查看栈顶端元素
    peek(){
        if(this.empty()){
            throw new Error("stack is empty")
        }
        return this.items[this.items.length-1]
    }
    // 获取栈大小
    size(){
        return this.items.length
    }
    // 清除栈
    clear(){
        this.items = []
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log("栈顶元素=>",stack.peek());
console.log("栈大小=>",stack.size());
console.log("栈是否为空=>",stack.empty());

stack.pop()
console.log("使用一次pop后栈大小=>",stack.size());
console.log("使用一次pop后栈顶元素是=>",stack.peek());
console.log("使用一次pop后栈是否为空=>",stack.empty());