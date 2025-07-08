/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head
    // find size
    let size = 0
    let curr = head
    let s = head
    let f = head
    while(curr){
        curr = curr.next
        size+=1
    }
    // find k if < size
    k = k % size 
    for(let i = 0;i<k;i++){
        f = f.next
    }
    while(f.next){
        f = f.next
        s = s.next
    }
    f.next = head
    let newNode = s.next
    s.next = null
    return newNode
};