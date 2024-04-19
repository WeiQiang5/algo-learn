/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reverseBookList = function(head) {
    let stack = []
    while(head.next){
        stack.push(head.val)
    }
    return stack
};