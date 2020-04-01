/*
 *This is an abstract DS (Stack) with an implementation using Array
 */

//This follows a LIFO concept, the additon and deletion happens at the front of the array 

//declaring the class
class ArrayStack {

    //params --> stackSize(number)
    constructor(stackSize) {
        this.arrStack = [];
        this.stackSize = stackSize;           
    }

    //Pushing a new node to the top of the stack
    //params --> data (any)
    //returns --> stack
    push(data){

        //check the stack size
        if (this.arrStack.length < this.stackSize) {
            this.arrStack.push(data);
            return this.arrStack;
        } else {
            //stack overflow pop some data before pushing in
            return -1;
        }
    }

    //Poping a node from the top of the stack
    //params --> none
    //returns --> data(any)
    pop(data){
        //check the stack size
        if (this.arrStack.length == 0) {
            let data = this.arrStack.pop();
            return data;
        } else {
            //stack underflow push some data before poping out
            return -1;
        }
    }

    //Getting the top most data of the stack
    //params --> none
    //returns --> data (any)
    peek(){
        if (this.arrStack.length == 0) {
            let data = this.arrStack[this.arrStack.length-1];
            return data;
        } else {
            //there is no data in the stack
            return -1;
        }
    }

    //Checking if the stack is empty
    //returns --> isEmpty(boolean)
    isEmpty() {
        let isEmpty = this.arrStack.length == 0 ? true : false;
        return isEmpty;
    }
}

//exporting the module
module.exports = ArrayStack;