/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let p = head;
    let a = [], b = [];
    while (p) {
        a.push(p.val);
        p = p.next;
    }
    for (let j = a.length - 1; j >= 0; j--) {
        b.push(a[j]);
    }
    return b;
};

// * 改进
var reversePrint = function (head) {
    if (!head) return []
    let a = []
    let node = head
    while (node) {
        a.push(node.val)
        node = node.next
    }
    return a.reverse()

};

// * 反转链表
var reversePrint = function (head) {
    function reverse(head) {
        if (!head || head.next == null) return head
        let temp = null, node = head.next
        head.next = null
        while (node) {
            temp = node.next
            node.next = head
            head = node
            node = temp
        }
        return head
    }

    head = reverse(head)

    let node = head, arr = []
    while (node) {
        arr.push(node.val)
        node = node.next
    }
    return arr
};
