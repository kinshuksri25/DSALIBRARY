//dependencies
import stackAbstract from '../generalImplementation/stackAbstract.js';
import messageClass from '../../../errors/messageClass.js';
import {messages,messageTypes} from '../../../errors/messagesConst.js';
import {returnedValueType,messageObject} from '../../generalInterfaces/generalTypes.js';
import linkedList from '../../LinkedList/linearLinkedList/SinglyLinkedList/linkedList.js';
import node from '../../LinkedList/linearLinkedList/SinglyLinkedList/node.js';

export default class stackLinkedList<Type> extends stackAbstract<Type>{

    private constructor(private _stackSize : number = _stackSize,private _arrayStack : linkedList<Type> = linkedList.getInstance()){
        super();
    }

    static getInstance<Type>(stackSize : number){
        return new stackLinkedList<Type>(stackSize);
    }

    public push(data : Type) : messageObject{
        let returnedValue : messageObject = {} as messageObject;
        if(this._arrayStack.sizeOf() < this._stackSize){
            this._arrayStack.addNode(data,1);
            returnedValue = new messageClass(messageTypes.SUCCESS,messages.ST_PUSH_DATA_SUCCESS).getMessageObject();
        }else{
            returnedValue = new messageClass(messageTypes.ERROR,messages.ST_PUSH_DATA_OVERFLOW).getMessageObject();
        }
        return returnedValue;
    }

    public pop() : returnedValueType{
        let returnedValue : returnedValueType = {} as returnedValueType;
        if(this._arrayStack.isEmpty()){
            returnedValue.data = this._arrayStack.deleteNode(1);
            returnedValue.messageObject = new messageClass(messageTypes.SUCCESS,messages.ST_PULL_DATA_SUCCESS).getMessageObject();
        }else{
            returnedValue.data = undefined;
            returnedValue.messageObject = new messageClass(messageTypes.ERROR,messages.ST_PULL_DATA_UNDERFLOW).getMessageObject();
        }
        return returnedValue;
    }

    public peek() : (Type | messageObject){
        if(!this._arrayStack.isEmpty()){
            let head = this._arrayStack.getHead() as node<Type>;
            return head.getData();
        }else{
            return new messageClass(messageTypes.ERROR,messages.ST_PEEK_DATA_UNDERFLOW).getMessageObject(); 
        }
    }

    public isEmpty() : boolean{
        return this._arrayStack.isEmpty();
    }
}