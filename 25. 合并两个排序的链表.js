
// * 法一 递归
var mergeTwoLists = function (l1, l2) {

    if (!l1) return l2
    if (!l2) return l1

    if (l1.val <= l2.val) { //!如果l1的第一个比l2的第一个小
        l1.next = mergeTwoLists(l1.next, l2)
        return l1 //!就返回l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }

};


// * 法二 迭代,(别人写的)即创建一个新的链表,把l1,l2排序后放进去
var mergeTwoLists = function (l1, l2) {
    let current = new ListNode();
    const dummy = current;

    while (l1 || l2) {
        if (!l1) {
            current.next = l2;
            return dummy.next;
        } else if (!l2) {
            current.next = l1;
            return dummy.next;
        }

        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }

        current = current.next;
    }

    return dummy.next;
};

