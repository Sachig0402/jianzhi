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
// * 哈希表法 
// * 时间复杂度是O(N)O(N)，空间复杂度是O(N)O(N)
var getIntersectionNode = function (headA, headB) {
    let aMap = new Map()
    let a = headA
    while (a != null) {
        aMap.set(a, true)//键值对,key为a,value为true
        a = a.next
    }
    let b = headB
    while (b) {
        if (aMap.has(b)) {
            return b
        }
        b = b.next
    }
    return null

};



// * 快慢指针
// * 时间复杂度是O(N)O(N)，空间复杂度是O(1)O(1)
var getIntersectionNode = function (headA, headB) {
    let a = headA, alen = 0, b = headB, blen = 0;
    while (a) {
        alen++
        a = a.next
    }
    while (b) {
        blen++
        b = b.next
    }
    if (!alen || !blen) return null
    let diff = 0, slow, fast
    if (alen > blen) {
        slow = headA
        fast = headB
        diff = alen - blen
    } else {
        slow = headB
        fast = headA
        diff = blen - alen
    }

    while (diff) {
        slow = slow.next
        diff--
    }

    while (slow != fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow

};


