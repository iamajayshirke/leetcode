/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create Sentinal
    let sentinel = new ListNode()
    sentinel.next = head
   
    // Calculate Size
     let length = 0
    while(head){
        head = head.next
        length+=1
    }
    
    // Calculate PrevPos
    let prevPos = length - n
    // Delete
    let prev = sentinel
    for(let i = 0;i<prevPos;i++){
        prev = prev.next
    }
    prev.next = prev.next.next

    return sentinel.next
};