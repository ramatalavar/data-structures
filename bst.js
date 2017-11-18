function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
};


function BST() {
	this.root = null;
};

BST.prototype.add = function(data) {
	var currentNode = this.root;
	if(!currentNode) {
		this.root = new Node(data);
		return this.root;
	}

	while(currentNode.data) {
		if(data < currentNode.data) {
			currentNode = currentNode.left;
		}else if(data > currentNode.right) {
			currentNode = currentNode.right;
		}
	}

	currentNode = new Node(data);

};