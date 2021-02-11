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
    push(data){

        //check the stack size
        if (this.arrStack.length < this.stackSize) {
            this.arrStack.push(data);
        } else {
            console.log("Stack overflow, pop data out before inserting more");
        }
    }

    //Popping a node from the top of the stack
    //params --> none
    //returns --> data(any)
    pop(){
        //check the stack size
        if (this.arrStack.length != 0) {
            let data = this.arrStack.pop();
            return data;
        } else {
            console.log("Stack underflow, push some data in before popping out");
            return null;
        }
    }

    //Getting the top most data of the stack
    //params --> none
    //returns --> data (any)
    peek(){
        if (this.arrStack.length != 0) {
            let data = this.arrStack[this.arrStack.length-1];
            return data;
        } else {
            console.log("Stack underflow, push some data in before peeking");
            return null;
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