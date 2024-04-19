
// 链表节点
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// 链表
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    // 在链表尾部添加新节点
    append(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    // 在链表
}