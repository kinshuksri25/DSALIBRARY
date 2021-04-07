//dependencies
import Node from './node.js';
import linkedListAbstract from '../../generalImplementation/linkedListAbstract.js';

export default abstract class doublyLinkedListAbstract<Type> extends linkedListAbstract<Type>{

    constructor(protected _head : (Node<Type> | undefined), protected _size : number = 0){
        super(_head,_size);
    }

    protected abstract deleteNodeTail() : Type | undefined;
}