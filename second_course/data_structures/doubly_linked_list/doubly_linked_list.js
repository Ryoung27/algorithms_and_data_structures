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

    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.prev = null;
            this.length = 0;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index){
        let current = this.head;
        let count = 0;
        if(index < 0 || index >= this.length) return undefined;
        if(index <= this.length/2){
            while(count !== index){
                current = current.next;
                count++;
            }
            return current;
        } else{
            count = this.length - 1;
            current = this.tail;
                while(count !== index){
                    current = current.prev;
                    count--;
                }
            return current;
        }
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true
        } else{
            return false
        }
    }

    insert(index, val){
        if(index < 0 || index > this.length) return undefined;
        if(index === length){
            return !!this.push(index);
        } else if(index === 0){
            return !!this.unshift(val);
        } else if(index === length){
            return this.push(val);
        } else{

            let newNode = new Node(val);
            let beforeNode = this.get(index - 1);
            let afterNode = beforeNode.next;

            beforeNode.next = newNode;
            newNode.prev = beforeNode;
            newNode.next = afterNode;
            afterNode.prev = newNode;
            this.length++;
            return true
        }
    }

    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === length){
            this.shift();
        }
        if(index === length-1){
            this.pop();
        }
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}

