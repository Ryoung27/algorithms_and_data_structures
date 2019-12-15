class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val);
        // The list is empty
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
            this.prev = null;
        } else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop(val){
        if(!this.head) return undefined;
        let popped_node = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = popped_node.prev;
            this.tail.next = null;
            popped_node.prev = null;
        }
        this.length--;
        return popped_node;
    }
}

