var copyRandomList = function (head) {
    if (!head) return null
    let m = new Map()
    let node = head
    while (node) {
        m.set(node, new Node(node.val))
        node = node.next
    }
    node = head
    while (node) {
        m.get(node).next = node.next ? m.get(node.next) : null
        // m.get(node)是拿到了Map m中和原链表node.val相同的元素,此时这个元素只有一个val,还没有next和random
        m.get(node).random = node.random ? m.get(node.random) : null
        node = node.next
    }
    return m.get(head)


};