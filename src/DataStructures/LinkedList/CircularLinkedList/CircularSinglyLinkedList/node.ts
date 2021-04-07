//dependencies
import node from '../../generalImplementation/node.js';

export default class singlyNode<Type> extends node<Type>{
    constructor(protected _data: Type, protected _nextNode: (singlyNode<Type> | undefined) = undefined){
        super(_data,_nextNode);
    }

    public getData(){
        return this._data;
    }

    public getNextNode(){
        return this._nextNode;
    }

    public setData (data : Type) : undefined{
        this._data = data;
        return;
    }
    
    public setNextNode(nextNode : singlyNode<Type> | undefined) : undefined{
        this._nextNode = nextNode;
        return;
    }
}


