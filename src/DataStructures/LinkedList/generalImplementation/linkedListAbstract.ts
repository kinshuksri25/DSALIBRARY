//dependencies
import Node from './node.js';
import linkedListStructure from './linkedListInterface.js';
import messageClass from '../../../errors/messageClass.js';
import {messageTypes,messages} from '../../../errors/messagesConst.js';
import {returnedValueType,messageObject} from '../../generalInterfaces/generalTypes.js'; 

export default abstract class linkedListAbstract<Type> implements linkedListStructure<Type>{
    
    constructor(protected _head : (Node<Type> | undefined), protected _size : number = 0){}

    public abstract getHead():Node<Type>|messageObject;

    public abstract addNode (data : Type,position:number) : returnedValueType;

    protected abstract addNodeHead(node : Node<Type>) : void;

    protected abstract addNodeTail(node : Node<Type>):void;

    protected abstract addNodePosition(node : Node<Type>,position:number) : void

    public abstract deleteNode(position:number) : returnedValueType;

    protected abstract deleteNodeHead() : Type | undefined;

    protected abstract deleteNodePosition(position:number) : Type | undefined;

    public sizeOf(){
        return this._size;
    }

    public isEmpty() {
        let isEmpty = this.sizeOf() == 0 ? true : false;
        return isEmpty;
    }

    public indexOf(data : Type) : (number|messageObject){
        let currentNode = this._head;
        let counter = 1;

        if(this.isEmpty()){
            return new messageClass(messageTypes.ERROR,messages.LL_FIND_DATA_INVALID).getMessageObject();
        }

        while(currentNode){
            if (currentNode.getData() == data) {
                return counter;
            } else {
                currentNode = currentNode.getNextNode();
                counter++;
            }
        }

        return new messageClass(messageTypes.ERROR,messages.LL_FIND_DATA_INVALID).getMessageObject();
    }

    public valueOf(position:number) : (Type|messageObject){
        let currentNode = this._head;
        let counter = 1;

        let returnedValue : (messageObject | Type) = {} as (messageObject | Type);

        if(this.isEmpty() || position > this.sizeOf() || position < 1){
            returnedValue = new messageClass(messageTypes.ERROR,messages.LL_INVALID_POSITION).getMessageObject();
        }

        while(counter <= this.sizeOf()){
            if(position == counter){
                returnedValue = currentNode?.getData()!;
            }
            currentNode = currentNode?.getNextNode();
            counter++;
        }

        return returnedValue;
    }
}