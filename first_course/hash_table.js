let user = {
    age: 29,
    name: 'Richie',
    magic: true,
    yell: function(){
        console.log('Ahhhhhhh!');
    }
}

user.age //O(1)
user.spell = 'abra kadabra' // O(1)
user.scream();

//HASH TABLE
class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let has = 0;
        for(let i= 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');

//Linked List
const basket = ['apples', 'grapes', 'pears']

// linked list: apples --> grapes --> pears