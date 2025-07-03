/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let hash = new Map()
    let curr = head
    while(curr){
        if(hash.has(curr)) return true
        hash.set(curr)
        curr = curr.next
    }
    return false
};