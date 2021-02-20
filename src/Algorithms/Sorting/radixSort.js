/*
*   This function uses radix sorting to an array in an increasing order (Not comparision based)
*/

//Time complexity O(n)
//params = arr(object),n(number)
export default function radixSort(arr,n){
    let maxElement = arr[0];
    for(let i=0;i<n;i++){
        maxElement = arr[i] > maxElement ? arr[i] : maxElement;
    }

    for(let exp = 1; maxElement/exp > 0; exp*=10 ){
        countingSort(arr,n,exp);
    }
}


//Time complexity O(n)
//params = arr(object),n(number),exp(number)
function countingSort(arr,n,exp){
    
    let range = 10;
    let output = [];

    let positionArray = [];
    for(let i=0;i<range;i++){
        positionArray[i]=0;
    }

    for(let i=0;i<n;i++){
        positionArray[(arr[i]/exp)%10]++;
    }
    
    for(let i=1;i<n;i++){
        positionArray[i]+=positionArray[i-1];
    }

    for(let i=n-1;i>0;i--){
        output[positionArray[(arr[i]/exp)%10] -1] =  arr[i];
        positionArray[(arr[i]/exp)%10]--;
    }
    arr = output;
}