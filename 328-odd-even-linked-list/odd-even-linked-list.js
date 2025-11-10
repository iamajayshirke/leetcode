/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    // Handle edge cases: 0 or 1 node
    if (!head || !head.next) {
        return head;
    }

    // 'odd' is the pointer for the last node in the odd list (starts at head)
    let odd = head;
    // 'evenHead' stores the head of the even list (starts at the second node)
    let even = head.next;
    // 'even' is the pointer for the last node in the even list (starts at the second node)
    let evenHead = even;
    // We stop when 'even' or 'even.next' is null, meaning we've processed all pairs
    while (odd.next && even.next) {
        // 1. Link the current odd node to the next odd node (skipping 'even.next')
        odd.next = odd.next.next
        even.next = even.next.next // which is the node after the current 'odd'
        odd = odd.next 
        even = even.next
    }

    // Connect the end of the odd list to the head of the even list
    odd.next = evenHead;

    // The head of the original list is the head of the new odd list
    return head;
};