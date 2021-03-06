//Piece of data
// A reference to the next node

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = Node(val);
        // The list is empty
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(val){
        const node = Node(val)
        if (!this.head) {
            return undefined;
        }else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return val
        }
        else{
            let current = this.head;
            let secondToLastNode;
            while(current){
                if(current.next === this.tail){
                    secondToLastNode = current;
                    break;
                }
            current = current.next;
        }
        secondToLastNode.next = null;
        this.tail = secondToLastNode;
        this.length--;
        return nodeToRemove
    }
}

    iPop(val){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }else{
            let currentHead = this.head;
            this.head = currentHead.next;
            this.length--;
            return currentHead;
        }

    }

    unshift(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index){
        let current = this.head;
        let count = 0;
        if(index < 0 || index >= this.length) return undefined;
        while(count != index){
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return undefined;
        if(index === length){
            return !!this.push(index);
        } else if(index === 0){
            return !!this.unshift(val);
        } else{
            let newNode = new Node(val);
            let prev = this.get(index - 1);
            let temp = prev.next;
            prev.next = newNode;
            newNode.next = temp;
            this.length++;
            return true
        }
    }

    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === length){
            this.shift();
        }
        let previousNode = this.get(index -1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

}

// push(value) {
//     const node = Node(value);
//     // The list is empty
//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//       this.length++;
//       return node;
//     }
//     this.tail.next = node;
//     this.tail = node;
//     this.length++;
//   }
// let first = new Node("Hello");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

let list = new SinglyLinkedList()

list.push("Hello")
list.push("Good bye")