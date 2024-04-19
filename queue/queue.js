

class Queue {
    constructor(){
        this.items = []
    }
    // 入队操作
    enqueue(element){
        this.items.push(element)
    }
    // 出队操作
    dequeue(){
        if(this.isEmpty()){
            throw new Error("Queue is empty")
        }
        this.items.shift()
    }
    // 判断队列是否为空
    isEmpty(){
        return this.items.length === 0
    }
    // 返回队头元素
    front(){
        if(this.isEmpty()){
            throw new Error("Queue is empty")
        }
        return this.items[0]
    }
    // 返回队列大小
    size(){
        return this.items.length
    }
    // 清空队列
    clear(){
        this.items = []
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front()); // 输出: 10
console.log(queue.size()); // 输出: 3
console.log(queue.isEmpty()); // 输出: false
queue.dequeue();
console.log(queue.size()); // 输出: 2
queue.clear();
console.log(queue.isEmpty()); // 输出: true
