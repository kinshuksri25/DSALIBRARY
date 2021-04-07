//dependencies
import node from '../../generalImplementation/node.js';

export default abstract class doublyNodeAbstract<Type> extends node<Type>{

    constructor(protected _data: Type, 
                protected _nextNode: (node<Type> | undefined),
                protected _previousNode: (node<Type> | undefined)){
        super(_data,_nextNode);
    }

    public abstract getPreviousNode() : (node<Type> | undefined);

    public abstract setPreviousNode(nextNode : node<Type> | undefined) : undefined;
}