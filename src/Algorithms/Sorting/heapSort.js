/*
*   This function uses heap sorting to an array in an increasing/decreasing order
*/

//Time complexity O(n) 
//params = arr(object),n(number),increasing(boolean)
function heapSort(arr,n,increasing=true){
    buildHeap(arr,n,increasing);
    if(increasing){
        for(let i=n-1;i>=0;i--){
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
            maxHeapify(arr,i,0,increasing);
        }
    }else{
        for(let i=0;i<n;i++){
            minHeapify(arr,i,0,increasing);
        }
    }
}

//Time complexity O(n) 
//params = arr(object),n(number),increasing(boolean)
function buildHeap(arr,n,increasing){
    for(let i=(n-2)/2;i>=0;i--){    //(n-2)/2 will give the last internal node (parent of last node) use the formulae((i-1)/2), put i = n-1
        if(increasing){
            maxHeapify(arr,n,i);
        }else{
            minHeapify(arr,n,i);
        }
    }   
}

//params = arr(object),n(number),pos(number)
function maxHeapify(arr,n,pos){
    let largest = pos,leftChild = 2*i+1,rightChild = 2*i+2;
    if(leftChild < n && arr[leftChild] > arr[largest]){
        largest = leftChild;
    }
    if(rightChild < n && arr[rightChild] > arr[largest]){
        largest = rightChild;
    }

    if(largest != pos){
       let temp = arr[largest];
       arr[largest] = arr[pos];
       arr[pos] = temp;
       
       maxHeapify(arr,n,largest);
    }
}

//params = arr(object),n(number),pos(number)
function minHeapify(arr,n,pos){
    let smallest = pos,leftChild = 2*i+1,rightChild = 2*i+2;
    if(leftChild < n && arr[leftChild] < arr[smallest]){
        smallest = leftChild;
    }
    if(rightChild < n && arr[rightChild] < arr[smallest]){
        smallest = rightChild;
    }

    if(smallest != pos){
       let temp = arr[smallest];
       arr[smallest] = arr[pos];
       arr[pos] = temp;
       
       minHeapify(arr,n,smallest);
    }
}