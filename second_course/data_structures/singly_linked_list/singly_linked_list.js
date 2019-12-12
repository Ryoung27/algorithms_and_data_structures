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