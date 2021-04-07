//dependencies
import node from './nodeAbstractClass.js';

export default class doublyNode<Type> extends node<Type>{
    constructor(protected _data: Type, 
                protected _nextNode: (doublyNode<Type> | undefined) = undefined,
                protected _previousNode : (doublyNode<Type> | undefined) = undefined){
        super(_data,_nextNode,_previousNode);
    }

    public getData(){
        return this._data;
    }

    public getNextNode(){
        return this._nextNode;
    }

    public getPreviousNode(){
        return this._previousNode;
    }

    public setData (data : Type) : undefined{
        this._data = data;
        return;
    }
    
    public setNextNode(nextNode : doublyNode<Type> | undefined) : undefined{
        this._nextNode = nextNode;
        return;
    }

    public setPreviousNode(previousNode : doublyNode<Type> | undefined) : undefined{
        this._previousNode = previousNode;
        return;
    }
}