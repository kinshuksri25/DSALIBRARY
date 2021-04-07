//dependencies
import doublyCircularLinkedList from '../../LinkedList/CircularLinkedList/CircularDoublyLinkedList/circularDoublyLinkedList.js';
import {returnedValueType,messageObject} from '../../generalInterfaces/generalTypes.js'; 

export default abstract class abstractQueue<Type> {
    constructor(protected _queue : (doublyCircularLinkedList<Type>|undefined) = undefined,
                protected _queueSize : number,
                protected _rearPos : number = 0){}

    public abstract front():Type;

    public abstract rear():Type;

    public abstract enqueue(data : Type):returnedValueType;

    public abstract dequeue():(messageObject|Type);

    public isEmpty():boolean{
        return this._rearPos == 0;
    }

    public isFull():boolean{
        return this._rearPos == this._queueSize;
    }
}