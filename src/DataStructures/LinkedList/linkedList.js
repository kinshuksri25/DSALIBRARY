/*
This DS is called when single linked list DS needs to be created.
*/

//dependencies
let Node = require('./node');

//declaring the class
class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Adds a new node in the linkedList instance
    //params --> data (any), postion (number)
    addNode(data,position=this.size){
        let node = new Node(data);
        let currentNode;
        position = typeof (position) == "number" && positon <= this.size ? postion : this.size;  

        if (this.size == 0) {
            this.head == node;
        } else{
            currentNode = this.head;
            let counter = 0;
            while (currentNode.nextNode) {
                if (counter == position && position != this.size) {
                    currentNode = currentNode.next;
                    node.nextNode = currentNode.next;
                    currentNode.nextNode = node;
                    break;
                } else if (counter == position && position == this.size) {
                    currentNode = currentNode.nextNode;
                    currentNode.nextNode = node;
                    break;
                } else {
                    currentNode = currentNode.nextNode;
                }
                counter++;
            }
        }
        this.size++;
    }

    //deleting a node at a particular position
    //params --> position (number)
    deleteNode(postion=this.size) {
        if (this.size != 0) {
            position = typeof (position) == "number" && positon <= this.size ? position : this.size;

            let currentNode = this.head;
            let selectedNode;
            let counter = 0;
            while (currentNode.nextNode) {
                if (counter == position - 1 && position != this.size) {
                    selectedNode = currentNode.nextNode;
                    currentNode.nextNode = selectedNode.nextNode;
                    selectedNode.nextNode = null;
                    break;
                } else if (counter == position - 1 && position == this.size) {
                    currentNode.nextNode = null;
                    break;
                } else {
                    currentNode = currentNode.nextNode;
                }
                counter++;
            }
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
                currentNode = currentNode.nextNode;
                counter++;
            }
        }
        //not found
        return -1;
    }

    //searching for a particular node
    //TODO --> this will be written post searching
    searchNode() {

    }

}

//export the module
module.exports = LinkedList;
