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
            this.linkedListStack.addNode(data,1);
        } else {
            console.log("Stack overflow, pop data out before inserting more");
        }
    }

    //Poping a node from the top of the stack
    //params --> none
    pop() {
        //check the stack size
        if (this.linkedListStack.sizeOf() != 0) {
            let data = this.linkedListStack.deleteNode(1);
            return data;
        } else {
            console.log("Stack underflow, push some data in before popping out");
            return null;
        }
    }

    //Getting the top most data of the stack
    //params --> none
    //returns --> data (any)
    peek() {
        if (this.linkedListStack.sizeOf() != 0) {
            return this.linkedListStack.head.data;
        } else {
            console.log("Stack underflow, push some data in before peeking");
            return null;
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