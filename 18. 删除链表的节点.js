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

deleteNode([1, 2, 4, 5, 7], 5)

// !重做的方法
var deleteNode = function (head, val) {
    let node = head, pin = node.next
    if (node.val === val) {
        node = node.next
        head.next = null
        return node
    }
    while (pin) {
        if (pin.val !== val) {
            node = pin
            pin = pin.next
        } else if (pin.val === val) {
            node.next = pin.next
            pin.next = null
            pin = node.next
            // break
        }
    }
    return head
};