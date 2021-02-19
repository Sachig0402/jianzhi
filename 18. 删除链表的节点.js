var deleteNode = function (head, val) {
    let pre = head, node = pre.next
    if (pre.val === val) {
        return head.next
    }
    while (node) {
        if (node.val === val) {
            pre.next = node.next;
        }
        pre = node
        node = node.next
    }
    console.log(head)
}

deleteNode([1,2,4,5,7],5)