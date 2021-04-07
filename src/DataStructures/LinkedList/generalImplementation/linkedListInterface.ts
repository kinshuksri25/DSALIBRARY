import {returnedValueType, messageObject} from '../../generalInterfaces/generalTypes.js';

export default interface linkedListStructure<Type> {
    addNode : (data : Type, position : number) => returnedValueType;
    deleteNode : (position : number) => returnedValueType;
    sizeOf : () => number;
    isEmpty : () => boolean;
    indexOf : (data:Type) => (number|messageObject);
    valueOf : (position : number) => (Type|messageObject);
}