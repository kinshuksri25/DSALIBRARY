import Node from './node.js';

export default interface nodeStructure<Type>{
    getData : () => Type;
    getNextNode : () => (Node<Type> | undefined);
    setData : (data : Type) => undefined;
    setNextNode : (nextNode : Node<Type> | undefined) => undefined;
}