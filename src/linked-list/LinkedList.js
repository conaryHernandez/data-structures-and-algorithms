class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };

    newNode.next = this.head;

    this.head = newNode;

    this.length++;

    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;

    newNode.next = holdingPointer;

    this.length++;

    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = leader.next;

    leader.next = nodeToDelete.next;

    this.length--;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;

      counter++;
    }

    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    // [1, 10, 16, 88]
    this.tail = this.head;

    let first = this.head; // 1
    let second = first.next; // 10

    while (second) {
      const temp = second.next; // 16

      second.next = first; // 10 -> 1

      first = second; // 1-> 10

      second = temp; // 10 -> 16
    }

    this.head.next = null;
    this.head = first;

    return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.prepend(1);

myLinkedList.insert(2, 99);
myLinkedList.reverse();

console.log('myLinkedList.printList()', myLinkedList.printList());
