/*
This file contains general interfaces used by all the data structures
*/
//dependencies
import {messageTypes,messages} from '../../errors/messagesConst.js';

export type messageObject = {
    messageType : messageTypes;
    message:messages;
}

export type returnedValueType = {
    data : any;
    messageObject : messageObject;
}