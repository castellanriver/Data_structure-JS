class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val){
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length ++;
    return this;
  }
  
  pop() {
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next; 
    }
    // delete pointer (disconnection)
    this.tail = newTail;
    this.tail.next = null;
    this.length --;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length --;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
    newNode.next = this.head;
    this.head = newNode;
    }
    this.length ++;
    return this;
  }
  get(index) {
    if(index < 0 || index >= this.length ) return null;
    var counter = 0;
    var current = this.head;
    while(counter != index){
      current = current.next;
      counter ++;
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index)
    if(foundNode) {
      foundNode.val = val;
      return true
    } 
    return false;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    // !! for return boolean(truethy)

    var newNode = new Node(val);
    var prev = this.get(index -1)

    // prev.next = newNode

    // CAUTION! this code cause delete of .next info
    // We need temporarily variable 

    var temp = prev.next; // storing prev.next info into temp.
    prev.next = newNode;
    newNode.next = temp; //got prev.next link to newNode.next
    this.length ++;
    return true;
  } 

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0 ) return this.shift();
    if(index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length --;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail; // swap head and tail
    this.tail = node;
    var prev = null;
    var next;

    for(var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  }

}

var list = new SinglyLinkedList
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)

list.reverse()

list.print()

// console.log(list.traverse())

//   pop() {
//     if(!this.head) return undefined;
//     var current = this.current;
//     var newTail = this.current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//   }


// } 


// 

// var first = new Node("HI");
// first.next = new Node("there");
// first.next.next = new Node("how");

// var list = new SinglyLinkedList();
// list.push("hello");
// list.push("goodbye");
// list.push("99")

// console.log(list.traverse)
// first.next = new Node("there")