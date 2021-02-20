/*
*   This function uses bubble sorting to an array in an increasing/decreasing order
*/


//TimeComplexity --> O(n*n)
//params --> array(object),n(number),increasing(boolean)
export default function bubbleSort(arr,n,increasing=true){
    for(let i=0;i<n;i++){
        let swapped = false;
        for(let j=0;i<n;j++){
           if(increasing){
                if(arr[j] > arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
           }else{
                if(arr[j] < arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
           }
        }
        if(!swapped) break;
    }
    return arr;
}