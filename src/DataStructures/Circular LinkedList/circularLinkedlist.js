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

    //Calls the appropriate method that will add a new node in the linkedList instance
    //params --> data (any), postion (number)
    //returns --> head(Node)
    addNode(data, position=this.sizeOf()+1) {
        let node = new Node(data);
        //TODO --> error handling for invalid position
        if(!this.head){
            this.head = node;
            this.head.nextNode = this.head;
            position != 1 && console.log("Head is undefined, recieved invalid position. Adding node as head");
        }else{
            //TODO --> error handling for invalid position
            if(typeof(position) != "number" || (position > this.sizeOf()+1 || position < 1)){
                position = this.sizeOf()+1;
                console.log("received invalid position. Adding node to tail");
            }   
            
            position == 1 && this.addNodeHead(node);
            position == this.sizeOf()+1 && this.addNodeTail(node);
            position > 1 && position < this.sizeOf()+1 && this.addNodePosition(node,position);

        }
        this.size++;
        return this.head;
    }

    //adding a new node to the front of the list (this method is private)
    //params --> node (Node)
    addNodeHead(node){
        node.nextNode = this.head.nextNode;
        this.head.nextNode = node;
        let data = node.data;
        node.data = this.head.data;
        this.head.data = data;
    }

    //adding a new node to the tail of the list (this method is private)
    //params --> node (Node)
    addNodeTail(node){
        node.nextNode = this.head.nextNode;
        this.head.nextNode = node;
        let data = node.data;
        node.data = this.head.data;
        this.head.data = data;
        this.head = node;
    }

    //adding a new node to a particular position (this method is private)
    //params --> node (Node), position (number)
    addNodePosition(node,position){
        let currentNode = this.head;
        let counter = 1;
        while(counter <= position-2){
            currentNode = currentNode.nextNode;
            counter++;
        }

        node.nextNode = currentNode.nextNode;
        currentNode.nextNode = node; 

    }

    //deleting a node at a particular position
    //params --> position (number)
    //returns --> deletedData(any)
    deleteNode(position=this.sizeOf()) {
        let deletedData;
        if(this.sizeOf() == 0){
            console.log("List is empty, unable to delete data");
            return null;
        }else{
            if(typeof(position) != "number" && (position > this.sizeOf() || position < 1)){
                position = this.sizeOf();
                console.log("received invalid position. Deleting tail");
            }   
            
            if(position == 1){
                deletedData = this.deleteNodeHead();
            }else{
                deletedData = this.deleteNodePosition(position);
            }
        }
        this.size--;
        return deletedData;
    }

    //deleting a node at the head of the list (this method is private)
    //params --> none
    //returns --> deletedData(any)
    deleteNodeHead(){
        let currentNode = this.head.nextNode;
        this.head.data = currentNode.data;
        this.head.nextNode = currentNode.nextNode;
        currentNode.nextNode = null;
        return currentNode.data;
    }

    //deleting a node at a particular position (this method is private)
    //params --> position(number)
    //returns --> deletedData(any)
    deleteNodePosition(position){
        let currentNode = this.head;
        let counter = 1;
        while(counter <= position-2){
            currentNode = currentNode.nextNode;
            counter++;
        }

        let deletedNode = currentNode.nextNode;
        currentNode.nextNode = deletedNode.nextNode;
        deletedNode.nextNode = null;
        return deletedNode.data;
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
        let counter = 1;
        
        if(this.isEmpty()){
            return -1;
        }

        while (currentNode.nextNode != this.head) {
            let nodeData = currentNode.data instanceof("object")? JSON.stringify(currentNode.data) : currentNode.data;  
            data = currentNode.data instanceof("object")? JSON.stringify(currentNode.data) : currentNode.data; 
            if (nodeData == data) {
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
    //params --> position(number)
    //returns --> data(any)
    valueOf(position=this.sizeOf()) {
        let currentNode = this.head;
        let counter = 1;

        if(this.isEmpty()){
            return null;
        }

        while(counter < this.sizeOf()){
            if(position == counter){
                return currentNode.data;
            }
            currentNode = currentNode.nextNode;
            counter++;
        }

        if(position == this.sizeOf()){
            return currentNode.data;
        }

        return null;
    }

}

//export the module
module.exports = DoublyLinkedList;