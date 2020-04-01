/*
 *This is an abstract DS (Stack) with an implementation using LinkedList 
 */

//This follows a LIFO concept, the additon and deletion happens at the front of the linkedlist 

//Dependecies
let LinkedList = require("../../LinkedList/linkedList");

//declaring the class
class LinkedlistStack {
    constructor(stackSize) {
        this.linkedListStack = new LinkedList();
        this.stackSize = stackSize;
    }

    //Pushing a new node to the top of the stack
    //params --> data (any)
    //returns --> stack
    push(data) {
        //check the stack size
        if (this.linkedListStack.sizeOf() < this.stackSize) {
            this.linkedListStack.addNode(data);
            return this.linkedListStack;
        } else {
            //stack overflow pop some data before pushing in
            return -1;
        }
    }

    //Poping a node from the top of the stack
    //params --> none
    //returns --> data(any)
    pop(data) {
        //check the stack size
        if (this.linkedListStack.sizeOf() == 0) {
            let data = this.linkedListStack.deleteNode();
            return data;
        } else {
            //stack underflow push some data before poping out
            return -1;
        }
    }

    //Getting the top most data of the stack
    //params --> none
    //returns --> data (any)
    peek() {
        if (this.linkedListStack.sizeOf() == 0) {

            let data = this.linkedListStack.head;
            while (data.nextNode) {
                data = data.nextNode;
            }
            return data;
        } else {
            //there is no data in the stack
            return -1;
        }
    }

    //Checking if the stack is empty
    //returns --> isEmpty(boolean)
    isEmpty() {
        let isEmpty = this.linkedListStack.sizeOf() == 0 ? true : false;
        return isEmpty;
    }
}

//exporting the module
module.exports = LinkedlistStack;