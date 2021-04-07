/*
* This is an abstract DS(CircularQueue) with an implementation using LinkedList
*/

/*
    This is a FIFO operation deletion occurs from front and addition from the rear
    currentPostion = i;
    nextPostion = (i+1)%size
    previousPosition = (i+N-1)%size
 */

//Dependencies
let LinkedList = require('../../LinkedList/CircularLinkedList/CircularDoublyLinkedList/circularDoublyLinkedList.js');
let Node = require('../../LinkedList/node');

//declaring the class
class LinkedListCircularQueue {
    constructor(queueSize) {
        this.circularLinkedListQueue = new LinkedList();
        this.queueSize = queueSize;
        this.front = -1;
        this.rear = -1;
    }

    //add a new element to the rear of the circular queue
    //params --> data(any)
    //returns --> circularArrayQueue
    enqueue() {
        if (isFull()) {
            return -1;
        } else if (isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.queueSize;
        }
        this.circularLinkedListQueue.addNode(this.rear);
        return this.circularLinkedListQueue;
    }

    //delete an element from the front of the circular queue
    //params --> none
    //returns --> deletedData
    dequeue() {
        let deletedData;
        if (isEmpty()) {
            return -1;
        } else if (this.rear == this.front) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.queueSize;
        }
        deletedData = this.circularLinkedListQueue.deleteNode(0);
        return deletedData;
    }

    //checking if the Queue is empty
    //params --> none
    //returns --> isEmpty(boolean)
    isEmpty() {
        let isEmpty = this.rear == 1 && this.front == -1 ? true : false;
        return isEmpty;
    }

    //checking if the Queue is full
    //params --> none
    //returns --> isEmpty(boolean)
    isFull() {
        let isFull = (this.rear + 1) % this.queueSize == this.front ? true : false;
        return isFull;
    }
}

//export the module
module.exports = LinkedListCircularQueue;


