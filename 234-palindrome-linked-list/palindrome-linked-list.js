/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let start = head
    let fast = head
    let slow = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let prev = null
    let curr = slow
    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    let end = prev
    while(end){
        if(start.val !== end.val){
            return false
        }
        start = start.next
        end = end.next
    }
    return true
};