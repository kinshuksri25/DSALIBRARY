//dependencies
import Node from './node.js';
import messageClass from '../../../../errors/messageClass.js';
import linkedListAbstract from '../../generalImplementation/linkedListAbstract.js';
import {messageTypes,messages} from '../../../../errors/messagesConst.js';
import {returnedValueType} from '../../../generalInterfaces/generalTypes.js'; 

export default class circularDoublyLinkedList<Type> extends linkedListAbstract<Type>{

    private constructor( protected _size : number,protected _head : (Node<Type> | undefined) = undefined){
        super(_head,_size);
    }

    public static getInstance<Type>(size : number){
        return new circularDoublyLinkedList<Type>(size);
    }

    public getHead(){
        if(this.isEmpty()){
            return new messageClass(messageTypes.ERROR,messages.LL_GET_HEAD_ERROR).getMessageObject();
        }else{
            return this._head!;  
        }
    }

    //params --> data (Type), postion (number)
    //returns --> head(Node)
    public addNode (data : Type,position:number = this.sizeOf()+1) : returnedValueType{
        let returnedValue : returnedValueType = {} as returnedValueType;
        let newNode = new Node<Type>(data);
        if(!this._head){
            this._head = newNode;
            if(position != 1){
                returnedValue.messageObject = new messageClass(messageTypes.WARNING,messages.LL_UNDEFINED_HEAD).getMessageObject();
            }
        }else{
            if(position > this.sizeOf()+1 || position < 1){
                position = this.sizeOf()+1;
                returnedValue.messageObject = new messageClass(messageTypes.WARNING,messages.LL_INVALID_POSITION).getMessageObject();
            }

            position == 1 && this.addNodeHead(newNode);
            position == this.sizeOf()+1 && this.addNodeTail(newNode);
            position > 1 && position < this.sizeOf()+1 && this.addNodePosition(newNode,position);
            returnedValue.messageObject = new messageClass(messageTypes.SUCCESS,messages.LL_NODE_ADD_SUCCESS).getMessageObject();
        }
        this._size++;
        returnedValue.data = this._head;
        return returnedValue;
    }

    //params --> node (Node)
    protected addNodeHead(node : Node<Type>):void{

        let nextNode = this._head!.getNextNode() ? this._head?.getNextNode() : this._head;
        let headData = this._head!.getData();

        node.setNextNode(nextNode);
        node.setPreviousNode(this._head);
        nextNode?.setPreviousNode(node);
        this._head?.setNextNode(node);

        this._head?.setData(node.getData());
        node.setData(headData);
    }

    //params --> node (Node)
    protected addNodeTail(node : Node<Type>):void{
        let previousNode = this._head?.getPreviousNode() ? this._head.getPreviousNode() : this._head;
        
        node.setNextNode(this._head);
        node.setPreviousNode(previousNode);
        previousNode?.setNextNode(node);
        this._head?.setPreviousNode(node);
    }

    //params --> data (Node), postion (number)
    protected addNodePosition(node : Node<Type>,position:number) : void{
        let currentNode = this._head;
        let counter = 1;
        while(counter <= position -2){
            currentNode = currentNode?.getNextNode();
            counter++;
        }
        node.setNextNode(currentNode?.getNextNode());
        currentNode?.getNextNode()?.setPreviousNode(node);
        node.setPreviousNode(currentNode);
        currentNode?.setNextNode(node);
    }

    //params --> position (number)
    //returns --> deletedData(Type)
    public deleteNode(position : number = this.sizeOf()) : returnedValueType{
        let returnedValue : returnedValueType = {} as returnedValueType;
        if(this.sizeOf() == 0){
            returnedValue.data = null;
            returnedValue.messageObject = new messageClass(messageTypes.ERROR,messages.LL_NODE_DELETION_FAIL).getMessageObject();
        }else{
            if(position > this.sizeOf() || position < 1){
                position = this.sizeOf();
                returnedValue.messageObject = new messageClass(messageTypes.WARNING,messages.LL_NODE_DELETEION_INVALID_POS).getMessageObject();
            } 

            if(position == 1){
                returnedValue.data = this.deleteNodeHead();
            }else{
                returnedValue.data = this.deleteNodePosition(position);
            }
            this._size--;
            returnedValue.messageObject = new messageClass(messageTypes.SUCCESS,messages.LL_DATA_DEL_SUCCESS).getMessageObject();
        }
        return returnedValue;
    }

    //params --> N/A
    //returns --> deletedData(Type)
    protected deleteNodeHead() : Type | undefined{
        if(!this._head!.getNextNode()){
            let currentNodeData = this._head!.getData();
            this._head = undefined;
            return currentNodeData;
        }
        let head = this._head;
        let headData = head?.getData();
        let previousNode = this._head!.getPreviousNode();
        previousNode?.setNextNode(this._head?.getNextNode());
        this._head?.getNextNode()?.setPreviousNode(previousNode);
        
        this._head = this._head?.getNextNode();
        head = undefined;
        return headData;
    }

    //params --> position (number)
    //returns --> deletedData(Type)
    protected deleteNodePosition(position:number) : Type | undefined{
        let currentNode = this._head;
        let counter = 1;

        while(counter <= position-2){
            currentNode = currentNode?.getNextNode();
            counter++;
        }
        let deletedNode = currentNode?.getNextNode();
        
        currentNode?.setNextNode(deletedNode?.getNextNode());
        deletedNode?.getNextNode()?.setPreviousNode(currentNode);

        let deletedNodeData = deletedNode!.getData();
        deletedNode = undefined;
        
        return deletedNodeData;
    }
}