//dependencies
import doublyCircularLinkedList from '../../LinkedList/CircularLinkedList/CircularDoublyLinkedList/circularDoublyLinkedList.js';
import node from '../../LinkedList/CircularLinkedList/CircularDoublyLinkedList/node.js';
import  queueAbstractClass from "../generalImplementation/queueAbstractClass.js";
import messageClass from '../../../errors/messageClass.js';
import {messageTypes,messages} from '../../../errors/messagesConst.js';
import {returnedValueType,messageObject} from '../../generalInterfaces/generalTypes.js'; 

export default class queue<Type> extends queueAbstractClass<Type>{
    private constructor(protected _queueSize : number,
                        protected _queue : (doublyCircularLinkedList<Type>|undefined) = undefined,
                        protected _rearPos : number = 0){
                            super(_queue,_queueSize,_rearPos);
                        }

    static getInstance<Type>(_queueSize:number){
        return new queue<Type>(_queueSize,doublyCircularLinkedList.getInstance(_queueSize));
    }        
    
    public front():Type{
        let head = this._queue!.getHead() as node<Type>;
        return head.getData();
    }

    public rear():Type{
        let head = this._queue!.getHead() as node<Type>;
        return head.getPreviousNode()!.getData();
    }

    public enqueue(data : Type):returnedValueType{
        let returnedValue : returnedValueType = {} as returnedValueType;
        if(this.isFull()){
            returnedValue.data = undefined;
            returnedValue.messageObject = new messageClass(messageTypes.ERROR,messages.QU_ENQ_DATA_FULL).getMessageObject();
            return returnedValue;
        }else{
            this._rearPos++;
            returnedValue.data = this._queue?.addNode(data,1).data;
            returnedValue.messageObject = new messageClass(messageTypes.SUCCESS,messages.QU_ENQ_DATA_SUCCESS).getMessageObject();   
            return returnedValue;           
        }

    }

    public dequeue():(messageObject|Type){
        let returnedValue : messageObject = {} as messageObject;
        if(this.isEmpty()){
            returnedValue = new messageClass(messageTypes.ERROR,messages.QU_DEQ_DATA_EMPTY).getMessageObject();
            return returnedValue;
        }else{
            this._rearPos--;
            return this._queue?.deleteNode().data;
        }
    }
}