enum messages {
    LL_UNDEFINED_HEAD = "Head is undefined,recieved invalid position. Adding node as head",
    LL_INVALID_POSITION = "Received invalid position. Adding node to tail",
    LL_NODE_ADD_SUCCESS = "Node added successfully to the linked list",
    LL_NODE_DELETION_FAIL = "List is empty, unable to delete data",
    LL_NODE_DELETEION_INVALID_POS = 'Received invalid position. Deleting tail',
    LL_FIND_INVALID_POSITION = "Invalid position, unable to find a value",
    LL_GET_HEAD_ERROR = "Unable to find head as list is empty",
    LL_FIND_DATA_INVALID = "Unable to find requested data",
    LL_DATA_DEL_SUCCESS = "Data deleted successfully",
    ST_PUSH_DATA_SUCCESS = "Data pushed to stack successfully",
    ST_PUSH_DATA_OVERFLOW = "Unable to push the data, stack overflow",
    ST_PULL_DATA_SUCCESS = "Data pulled out of the stack",
    ST_PULL_DATA_UNDERFLOW = "Stack is empty, unable to pull data",
    ST_PEEK_DATA_UNDERFLOW = "Stack is empty, no data found",
    QU_ENQ_DATA_FULL = "Unable to add data to the queue since it is full",
    QU_ENQ_DATA_SUCCESS = "Data successfully added",
    QU_DEQ_DATA_EMPTY = "Unable to delete data, queue is empty",
    QU_DEQ_DATA_SUCCESS = "Data deleted successfully"
}

enum messageTypes {
    SUCCESS,
    WARNING,
    ERROR
}

export {messages,messageTypes};