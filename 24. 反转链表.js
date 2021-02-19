//法一 迭代,就是用几个指针 n 1
var reverseList = function (head) {
    let curr = head;
    let pre = null;
    while (curr) {
        let next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    }
    return pre
};

// 法二 递归 n n
var reverseList = function (head) {
    let newHead=reverseList(head.next);
    head.next.next=head
    head.next=null // 必须有这句,若没有,原来的第一个和第二个会形成环

    return newHead

    if(head==null||head.next==null){
        return head
    }
};