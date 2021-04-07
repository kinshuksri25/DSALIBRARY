
import nodeStructure from './nodeInterface.js';

export default abstract class node<Type> implements nodeStructure<Type>{
    constructor(protected _data: Type, protected _nextNode: (node<Type> | undefined)){}
    
    public abstract getData() : Type;

    public abstract getNextNode() : (node<Type> | undefined);

    public abstract setData (data : Type) : undefined;

    public abstract setNextNode(nextNode : node<Type> | undefined) : undefined;
}