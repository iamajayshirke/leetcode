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
var mergeTwoLists = function(l1, l2) {
    if(!l1 ) return l2
    if(!l2 ) return l1
    //Loop Both at Once till length of l1 and l2
    let finalList = new ListNode(0)
    let finalStart = finalList

    while(l1 && l2){
        
        const l1Value = l1.val
        const l2Value = l2.val
console.log(l1,l2,l1.val,l2.val,l1Value,l2Value)
        if(l1Value <= l2Value){
            console.log(l1Value,l2Value,"ebter")
            finalList.next = new ListNode(l1Value)
            finalList = finalList.next
            l1 = l1.next
        }else{
            console.log(l1Value,l2Value,"ebter2")
            finalList.next = new ListNode(l2Value)
            finalList = finalList.next
            l2 = l2.next
        }
        
    }
    console.log(l1,l2)
    while(l1 ){
        finalList.next = new ListNode(l1.val)
        finalList = finalList.next
        l1 = l1.next
    }

    
    while(l2){
        finalList.next = new ListNode(l2.val)
        finalList = finalList.next
        l2 = l2.next
    }
    return finalStart.next
};