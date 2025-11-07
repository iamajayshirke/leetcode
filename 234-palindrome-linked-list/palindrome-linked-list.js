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
    if (!head || !head.next) {
        return true; // Empty list or single-node list is a palindrome
    }

    // --- 1. Find the middle of the list (slow pointer) ---
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next; // slow will point to the start of the second half
        fast = fast.next.next;
    }

    // --- 2. Reverse the second half of the list (starting from slow) ---
    // 'prev' will be the new head of the reversed second half
    let prev = null;
    let current = slow; // Start reversal from the middle node (slow)
    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    // Now, 'prev' is the head of the reversed second half.

    // --- 3. Compare the first half (starting from 'head') with the reversed second half (starting from 'prev') ---
    let firstHalf = head;
    let secondHalfReversed = prev;
    let isPalin = true;

    // We only need to compare up to the end of the reversed second half
    while (secondHalfReversed) {
        if (firstHalf.val !== secondHalfReversed.val) {
            isPalin = false;
            break;
        }
        firstHalf = firstHalf.next;
        secondHalfReversed = secondHalfReversed.next;
    }

    /*
    // --- 4. (Optional but recommended) Restore the list by reversing the second half back ---
    // 'prev' currently points to the last node of the reversed list (which was 'slow' before reversal)
    // 'secondHalfReversed' is null because the loop finished.
    // We can re-use the 'current' pointer which is null, and 'prev' as the head of the reversed list.
    current = prev; // Start reversal from the head of the reversed half
    prev = null;
    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    // Now 'prev' is the head of the restored second half, and 'head' points to the first half.
    // The original link (e.g., first_half_end.next = slow_before_reversal) is NOT restored here.
    // For many coding interview problems, restoring the list is not strictly required
    // unless explicitly stated, but it's good practice for non-destructive operations.
    */

    return isPalin;
};