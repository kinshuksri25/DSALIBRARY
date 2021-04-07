/*
This DS is called when single linked list DS needs to be created.
*/


//dependencies
import Node from './node.js';
import linkedListAbstract from './linkedListAbstract.js';
import messageClass from '../../../../errors/messageClass.js';
import {messageTypes,messages} from '../../../../errors/messagesConst.js';
import {returnedValueType,messageObject} from '../../../generalInterfaces/generalTypes.js';  


export default class linkedList<Type> extends linkedListAbstract<Type> {

    private constructor(protected _head : (Node<Type> | undefined) = undefined, protected _size : number = 0){
        super(_head,_size);
    }

    public static getInstance<Type>(){
        return new linkedList<Type>();
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
        let ne = node.getNextNode();
        ne = this._head;
        this._head = node;
    }

    //params --> node (Node)
    protected addNodeTail(node : Node<Type>):void{
        let currentNode = this._head;

        while(currentNode?.getNextNode()){
            currentNode = currentNode.getNextNode();
        }
        currentNode?.setNextNode(node);
    }

    //params --> data (Type), postion (number)
    protected addNodePosition(node : Node<Type>,position:number) : void{
        let currentNode = this._head;

        let counter = 1;

        while(counter <= position-2){
            currentNode = currentNode?.getNextNode();
            counter++;
        }
        node.setNextNode(currentNode?.getNextNode());
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
            }else if(position == this.sizeOf()){
                returnedValue.data = this.deleteNodeTail();
            }else{
                returnedValue.data = this.deleteNodePosition(position);
            }
            returnedValue.messageObject = new messageClass(messageTypes.SUCCESS,messages.LL_DATA_DEL_SUCCESS).getMessageObject();
            this._size--;
        }
        return returnedValue;
    }

    //params --> N/A
    //returns --> deletedData(Type)
    protected deleteNodeHead() : Type | undefined{
        let removedData = this._head?.getData();
        this._head = this._head?.getNextNode();
        return removedData;
        
    }

    //params --> N/A
    //returns --> deletedData(Type)
    protected deleteNodeTail() : Type | undefined{
        let currentNode = this._head;

        while(currentNode?.getNextNode()?.getNextNode()){
            currentNode = currentNode?.getNextNode();
        }

        let removedData = currentNode?.getNextNode()?.getData();
        currentNode?.setNextNode(undefined);
        return removedData;
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
        deletedNode?.setNextNode(undefined);
        return deletedNode?.getData();
    }
}