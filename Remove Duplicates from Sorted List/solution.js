var deleteDuplicates = function(head) {
    if(head == null || head.next == null) return head;
    var prev = head;    
    var p = head.next;
    while(p != null){
        if(p.val == prev.val){
            prev.next = p.next;
            p = p.next;
        }else{
            prev = p;
            p = p.next; 
        }
    }
    return head;
};

// Example 1:

// Input: 1->1->2
// Output: 1->2

// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3