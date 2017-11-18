function LinkedList () {
  this.head = null;
}

LinkedList.prototype.loopLength = function () {
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

var L1 = new LinkedList();
L1.insertNodeAtTail(1);
L1.insertNodeAtTail(2);
L1.insertNodeAtTail(3);
L1.insertNodeAtTail(4);
L1.insertNodeAtTail(5);
L1.insertNodeAtTail(6);

// Create a circular linked list
L1.head.next.next.next.next.next.next = L1.head.next.next;
console.log(L1.loopLength()); // 4

// Remove circular dependency
L1.head.next.next.next.next.next.next = null;
console.log(L1.loopLength()); // 0
