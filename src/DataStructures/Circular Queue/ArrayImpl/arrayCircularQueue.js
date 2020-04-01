/*
* This is an abstract DS(CircularQueue) with an implementation using Array
*/

/*
    This is a FIFO operation deletion occurs from front and addition from the rear
    currentPostion = i;
    nextPostion = (i+1)%size
    previousPosition = (i+N-1)%size
 */

//declaring the class
class ArrayCircularQueue {

    constructor(queueSize) {
        this.circularArrQueue = [];
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
            this.rear = (this.rear + 1) % this.size;
        }
        this.circularArrQueue[this.rear] = data;
        return this.circularArrQueue;
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
            this.front = (this.front + 1) % (this.size);
        }
        deletedData = this.circularArrQueue[this.front];
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
        let isFull = (this.rear + 1) % this.size == this.front ? true : false;
        return isFull;
    }

    //searching for a particular node
    //TODO --> this will be written post searching
    searchNode() {

    }
}

//export the module
module.export = ArrayCircularQueue;