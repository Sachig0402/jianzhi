/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let right = head
    let left = head
    //let i = 0
    //while(i++ < k) {
    //    right = right.next
    //}
    for (let i = 1; i <= k; i++) {
        right = right.next;
    }

    while (right != null) {
        left = left.next;
        right = right.next;
    }

    return left;

};