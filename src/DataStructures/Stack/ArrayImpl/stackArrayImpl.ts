//dependencies
import stackAbstract from '../generalImplementation/stackAbstract.js';
import messageClass from '../../../errors/messageClass.js';
import {messages,messageTypes} from '../../../errors/messagesConst.js';
import {returnedValueType,messageObject} from '../../generalInterfaces/generalTypes.js';

export default class stackArray<Type> extends stackAbstract<Type>{

    private constructor(private _stackSize : number = _stackSize,private _arrayStack : Type[] = []){
        super();
    }

    public static getInstance<Type>(stackSize:number){
        return new stackArray<Type>(stackSize);
    }

    public push(data : Type) : messageObject{
        let returnedValue : messageObject = {} as messageObject;
        if(this._arrayStack.length < this._stackSize){
            this._arrayStack.push(data);
            returnedValue = new messageClass(messageTypes.SUCCESS,messages.ST_PUSH_DATA_SUCCESS).getMessageObject();
        }else{
            returnedValue = new messageClass(messageTypes.ERROR,messages.ST_PUSH_DATA_OVERFLOW).getMessageObject();
        }
        return returnedValue;
    }

    public pop() : returnedValueType{
        let returnedValue : returnedValueType = {} as returnedValueType;
        if(this._arrayStack!.length != 0){
            returnedValue.data = this._arrayStack!.pop();
            returnedValue.messageObject = new messageClass(messageTypes.SUCCESS,messages.ST_PULL_DATA_SUCCESS).getMessageObject();
        }else{
            returnedValue.data = undefined;
            returnedValue.messageObject = new messageClass(messageTypes.ERROR,messages.ST_PULL_DATA_UNDERFLOW).getMessageObject();
        }
        return returnedValue;
    }

    public peek() : (Type | messageObject){
        if(this._arrayStack.length != 0){
            return this._arrayStack[this._arrayStack.length-1];
        }else{
            return new messageClass(messageTypes.ERROR,messages.ST_PEEK_DATA_UNDERFLOW).getMessageObject(); 
        }
    }

    public isEmpty() : boolean{
        return this._arrayStack.length == 0;
    }
}