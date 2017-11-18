function Node(data) {
	this.data = data;
	this.previous = null;
	this.next = null;
};

function doublyLinkedList() {
	this.head = null;
	this.tail = null;
	this._length = 0;
};

doublyLinkedList.prototype.add = function(data) {
	var node = new Node(data);

	if(this._length) {
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
		
	} else {
		this.head = node;
		this.tail = node;
	}

	this._length++;

	console.log(this.head);
	return node;
};

doublyLinkedList.prototype.findAt = function(position) {
	var currentNode = this.head;
	var length = this._length;
	var count = 1;

	if(length === 0 || position < 1 || position > length) {
		console.log("Invalid position");
		return;
	}

	while(count < position) {
		currentNode = currentNode.next;
		count++;
	}

	console.log(currentNode);

	return currentNode;
};

doublyLinkedList.prototype.insertAt = function(data, position) {
	var currentNode = this.head;
	var length = this._length;
	var count = 1;
	var previousNode = null;

	if (position < 0 || position > length) {
		console.log("Invalid position");
		return;
	}

	var node = new Node(data);

	if (position === 1) {
		var temp = node;
		this.head.previous = node;
		node.next = this.head;
		this.head = node;

		console.log(this.head);

		return node;
	}

	while(count < position){
		previousNode = currentNode;
		currentNode = currentNode.next;
		count++;
	}

	node.previous = previousNode;
	node.next = currentNode;
	previousNode.next = node;

	console.log(previousNode);

	return node;
};

var dLinkedList = new doublyLinkedList();
dLinkedList.add(3);
dLinkedList.add(5);
dLinkedList.add(7);
dLinkedList.findAt(7);
dLinkedList.insertAt(1,7);
dLinkedList.findAt(2);
dLinkedList.insertAt(6,3);
