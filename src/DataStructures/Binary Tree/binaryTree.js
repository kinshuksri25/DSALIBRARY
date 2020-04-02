// This non-linear DS is called when a Ninary Search Tree needs to be created

//For a binary tree node the left side will point to a smaller value while the right would point to a bigger value than it 

//dependencies
let BinaryTreeNode = require('./node');

//declaring the class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    //Adds a new node to the binary tree
    //params --> data(any)
    insert(data){
        let binaryNode = new BinaryTreeNode(data);

        let currentNode = this.root;

        if (currentNode == null) {
            this.root = binaryNode;
        } else {
            while (currentNode != null) {
                if (binaryNode.data < currentNode.data && currentNode.left == null) {
                    currentNode.left = binaryNode;
                    break;
                } else if (binaryNode.data > currentNode.data && currentNode.right == null) {
                    currentNode.right = binaryNode;
                    break;
                }
                currentNode = binaryNode.data < currentNode.data ? currentNode.left : currentNode.right;
            }
        }
    }
   
    //removes a specified node from the binary tree
    //params --> data(any)
    remove(data) {
        this.root = this.removeNode(this.root, data); 
    }


    //heloer function for removing nodes from binary tree
    //params --> node (binary tree node), key (any)
    //returns --> node (binary tree node)
    removeNode(node, key) {

        // if the root is null then tree is  
        // empty 
        if (node === null)
            return -1;

        // if data to be delete is less than  
        // roots data then move to left subtree 
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        // if data to be delete is greater than  
        // roots data then move to right subtree 
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // if data is similar to the root's data  
        // then delete this node 
        else {
            // deleting node with no children 
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // deleting node with one children 
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children 
            // minumum node of the rigt subtree 
            // is stored in aux 
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    } 

    // findMinNode()
    findMinNode(node = this.root) {
        let currentNode = node;
        while (currentNode != null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    // getRootNode()
    getRootNode() {
        if (this.root == null) {
            return this.root;
        }
        return -1;
    }

    // inorder(node)
    inorder(node = this.root) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    } 
    // preorder(node) 
    preorder(node = this.root) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    } 
    // postorder(node) 
    postorder(node = this.root) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    // search(data)
    searchNode(data) {
        let currentNode = this.root;
        if (currentNode == null) {
            return -1;
        }

        while (currentNode != null) {
            if (data == currentNode.data) {
                return currentNode;
                break;
            }    
            currentNode = currentNode.data < data ? currentNode.right : currentNode.data == data ? currentNode : currentNode.left;
        }
    }

}

//export the module
module.exports = BinaryTree;