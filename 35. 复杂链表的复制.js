var copyRandomList = function (head) {
    if (!head) return null
    let m = new Map()
    let node = head
    while (node) {
        m.set(node, new Node(node.val))
        // * 设置了一对键值对,键名是原始node节点,键值是node节点的val
        node = node.next
    }
    node = head
    while (node) {
        m.get(node).next = node.next ? m.get(node.next) : null
        // * m.get(node),括号里node是键值对的键,get方法是用键拿Map m的键值对的值,     node.next是原链表的next节点,是map中下一个键值对的键,然后外面又m.get,即m.get(node.next)是m.get(下一个键值对的键),拿到下一个键值对的值
        m.get(node).random = node.random ? m.get(node.random) : null
        node = node.next
    }
    return m.get(head)


};