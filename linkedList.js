function Node(data) {
  this.data = data;
  this.next = null;
};

function linkedList() {
  this.head = null;
  this._length = 0;
};

linkedList.prototype.add = function(data) {

  var currentNode = this.head;
  var node = new Node(data);
  if(!currentNode) {
    this.head = node;
    this._length++;
    return node;
  }
  
  while(currentNode.next) {
    currentNode = currentNode.next;
  }
  
  currentNode.next = node;
  this._length++;
  
  return node;
};

linkedList.prototype.addAt = function(data, position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 1;
  var previous = null;

  if(length === 0 || position < 1 || position > length) {
    return "Invalid node position";
  }

  var node = new Node(data);

  if(position === 1) {
    node.next = currentNode;
    this.head = node;

    return node;
  }

  while(count < position) {
    previous = currentNode;
    currentNode = currentNode.next;
    count++;
  }
  
  node.next = currentNode;
  previous.next = node;

  return node;
};

linkedList.prototype.findNodeAt = function(position) {
  var currentNode = this.head;
  console.log(this._length);
  var length = this._length;
  var count = 1;
  
  if(length === 0 || position < 1 || position > length) {
    return "Invalid node position";
  }
  
  while(count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
};

linkedList.prototype.deleteNodeAt = function(position) {
  var nodeBeforePosition = null;
  var deletedNode = null;
  var currentNode = this.head;
  var length = this._length;
  var count = 1;
  
  if(position < 0 || position > length) {
    return "Invalid node position";
  }
  
  if(position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    this._length--;
    
    return deletedNode;
  }
  
  while(count < position) {
    nodeBeforePosition = currentNode;
    currentNode = currentNode.next;
    count++;
  }
  
  nodeBeforePosition.next = currentNode.next;
  deletedNode = currentNode;
  this._length--;
  
  return deletedNode;
};

linkedList.prototype.reverse = function(list) {
  var currentNode = list || this.head;
  var previousNode = null;

  while(currentNode) {
    var nextNode = currentNode.next;

    currentNode.next = previousNode;

    previousNode = currentNode;

    currentNode = nextNode;
  }

  console.log(previousNode);
  return previousNode;
};

linkedList.prototype.print = function(head) {
  var currentNode = head || this.head;

  console.log("forward =====>>>", currentNode.data);

  if (currentNode.next) {
    this.print(currentNode.next);
  }

};

linkedList.prototype.printReverse = function(head) {
  var currentNode = head || this.head;

  if (currentNode.next) {
    this.printReverse(currentNode.next);
  }

  console.log("reverse ======>>>>", currentNode.data)

};

linkedList.prototype.loopLength = function () {
  var isLoop, loopLength;
  var p1, p2;

  isLoop = false;
  loopLength = 1;

  p1 = this.head;
  p2 = this.head;

  while (p2.next.next) {

    p2 = p2.next.next;
    p1 = p1.next;

    if (p1 === p2) {
      console.log(p1);
    console.log(p2);
      isLoop = true;
      break;
    }
  }

  if (isLoop) {
    p2 = p2.next;
    while (p1 !== p2) {
      loopLength++;
      p2 = p2.next;
    }
    return loopLength;
  } else {
    return 0;
  }

};

linkedList = new linkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);

linkedList.head.next.next.next.next.next.next = linkedList.head.next.next;
console.log(linkedList.loopLength()); // 4

// Remove circular dependency
linkedList.head.next.next.next.next.next.next = null;
console.log(linkedList.loopLength()); // 0


