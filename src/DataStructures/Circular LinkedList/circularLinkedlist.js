/*
This DS is called when circular doubly linked list DS needs to be created.
*/

//dependencies
let Node = require('./node');

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Adds a new node in the linkedList instance
    //params --> data (any), postion (number)
    addNode(data, position = this.size) {
        let node = new Node(data);
        let currentNode;
        position = typeof (position) == "number" && positon <= this.size ? postion : this.size;

        if (this.size == 0) {
            this.head == node;
        } else {
            currentNode = this.head;
            let counter = 0;
            do {
                if (counter == position && position != this.size) {
                    currentNode = currentNode.nextNode;
                    node.nextNode = currentNode.nextNode;
                    node.previousNode = currentNode;
                    node.nextNode.previousNode = node;
                    currentNode.nextNode = node;
                    break;
                } else if (counter == position && position == this.size) {
                    currentNode = currentNode.nextNode;
                    currentNode.nextNode = node;
                    node.previousNode = currentNode;
                    node.nextNode = this.head;
                    break;
                } else {
                    currentNode = currentNode.nextNode;
                }
                counter++;
            }while (currentNode.nextNode != this.head)
        }
        this.size++;
    }

    //deleting a node at a particular position
    //params --> position (number)
    deleteNode(position = this.size) {
        if (this.size != 0) {
            position = typeof (position) == "number" && positon <= this.size ? position : this.size;

            let currentNode = this.head;
            let selectedNode;
            let counter = 0;
            do {
                if (counter == position - 1 && position != this.size) {
                    selectedNode = currentNode.nextNode;
                    currentNode.nextNode = selectedNode.nextNode;
                    selectedNode.nextNode.previousNode = currentNode;
                    selectedNode.previousNode = null;
                    selectedNode.nextNode = null;
                } else if (counter == position - 1 && position == this.size) {
                    currentNode.nextNode = this.head;
                    selectedNode.nextNode = null;
                    selectedNode.previousNode = null;
                    break;
                } else {
                    currentNode = currentNode.nextNode;
                }
                counter++;
            } while (currentNode.nextNode != this.head) 
            return selectedNode;
        } else {
             //unable to delete the linkedList is empty
            return -1;
        }
    }

    //returns the size of the linked list
    //params --> none
    //return --> size(number)
    sizeOf() {
        return this.size;
    }

    //checking if the Linkedlist is empty
    //params --> none
    //returns --> isEmpty(boolean)
    isEmpty() {
        let isEmpty = this.size == 0 ? true : false;
        return isEmpty;
    }

    //getting the index of a particular element
    //params --> data (any)
    //returns --> index(number)
    indexOf(data) {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode.nextNode) {
            if (currentNode.data == data) {
                return counter;
            } else {
                currentNode = currentNode.nextNode
                counter++;
            }
        }
        //not found
        return -1;
    }

    //searching for a particular node
    //TODO --> this will be written post searching
    searchNode(position = this.size) {

    }

}

//export the module
module.exports = DoublyLinkedList;