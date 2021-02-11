/*
node class for single LinkedList class
*/

class Node {

    constructor(data) {
        //both properties need to be private
        this.data = data;
        this.nextNode = null;
    }
    
}

//export the module
module.exports = Node;