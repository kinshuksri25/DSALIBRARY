/*
Class for generating messages
*/

//dependencies
import messageStructure from './messageInterface.js';
import {messageTypes,messages} from "./messagesConst.js";
import {messageObject} from '../DataStructures/generalInterfaces/generalTypes.js';

export default class messageClass implements messageStructure{

    constructor(private _messageType : messageTypes, private _message : messages){}

    public getMessageObject():messageObject{
        return {messageType : this._messageType,message : this._message};
    }
}