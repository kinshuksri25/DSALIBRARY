/*
node class for single Doubly LinkedList class
*/

//declaring the class
class Node {

    constructor(data) {
        this.data = data;
        this.nextNode = null;
        this.previousNode = null;
    }

}

//export the module
module.exports = Node;
