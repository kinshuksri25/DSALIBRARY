//dependencies
import {returnedValueType,messageObject} from '../../generalInterfaces/generalTypes.js';

export default abstract class stackAbstract<Type> {
    constructor(){}

    public abstract push(data : Type) : messageObject;

    public abstract pop() : returnedValueType;

    public abstract peek() : (Type | messageObject);

    public abstract isEmpty() : boolean;
}