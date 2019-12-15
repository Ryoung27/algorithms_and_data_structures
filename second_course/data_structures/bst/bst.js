class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(value === current.value) return undefined;
        if(this.root === null){
            this.root = newNode;
            return this;
        } else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this
                    } else{
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this
                    } else{
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value){
        let current = this.root;
        let found = false;
        if(this.root === null){
            return undefined;
        } else if(this.root === value){
            return this.root;
        } else{
            let current = this.root;
            while(true){
                if(value > current.value){
                    if(current.right === value){
                        return this;
                    } else{
                        current = current.right;
                    }
                } else if(value < current.value){
                    if(current.left === value){
                        return this
                    } else{
                        current = current.right;
                    }
                }
            }
        }
    }

    iFind(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    BFS(){
        let data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}


let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.root.left.left = new Node(4);
tree.root.right.left = new Node(11);
tree.root.right.right = new Node(30);