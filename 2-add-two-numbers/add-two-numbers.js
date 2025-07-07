/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let sumList = new ListNode()
    let startNode = sumList
    while(l1 || l2 || carry){
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry
        let digit = sum % 10
        carry = Math.floor(sum / 10)

        let newNode = new ListNode(digit)
        sumList.next = newNode

        sumList = sumList.next
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    console.log(startNode)
    return startNode.next
};