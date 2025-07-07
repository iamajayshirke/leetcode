/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let merge = new ListNode()
    let mergeStart = merge
    while(list1 && list2){
        if(list1.val >= list2.val){
            let newNode = new ListNode(list2.val)
            merge.next = newNode
            merge = merge.next
            list2 = list2.next
        }else if(list1.val <= list2.val){
            let newNode = new ListNode(list1.val)
            merge.next = newNode
            merge = merge.next
            list1 = list1.next
        }
    }
    while(list1){
        let newNode = new ListNode(list1.val)
        merge.next = newNode
        merge = merge.next
        list1 = list1.next
    }
    while(list2){
        let newNode = new ListNode(list2.val)
        merge.next = newNode
        merge = merge.next
        list2 = list2.next
    }
    return mergeStart.next
};