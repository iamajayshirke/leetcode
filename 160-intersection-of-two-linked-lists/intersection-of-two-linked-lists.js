/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hash = new Map()
    let curr1 = headA
    let curr2 = headB
    while(curr1){
        if(!hash.has(curr1)){
            hash.set(curr1)
        }
        curr1 = curr1.next
    }
    while(curr2){
        if(hash.has(curr2)){
            return curr2
        }
        curr2 = curr2.next
    }
    return null
};