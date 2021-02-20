/*
*   This function uses bucket sorting to an array in an increasing/decreasing order
*/

//Dependencies
import insertionSort from './insertionSort.js';


//Time complexity O(n*n)
//params = arr(object),n(number),bucketSize(number),increasing(boolean)
export default function bucketSort(arr,n,bukcetSize,increasing=true){
    let maxVal = arr[0];
    let secArr = [];
    let bucketArray = [];

    for(let i=0;i<n;i++){
        maxVal = maxVal < arr[i] ? arr[i] : maxVal;
    }
    //we increament the max_val by one since there exist max value in the arr and when we divide those val by maxVal 
    //we will get a new bucket slot index greater than the bucketsize.(check the below for loop)
    maxVal++;

    for(let i=0;i<bukcetSize;i++){
        let bucketPos = (bucketSize*arr[i])/maxVal;
        bucketArray[bucketPos].push(arr[i]);
    }

    for(let i=0;i<bucketSize;i++){
        insertionSort(bucketArray[i],bucketArray[i].length,increasing);
    }

    for(let i=0;i<bucketSize;i++){
        secArr.push([...bucketArray[i]]);
    }
    arr=secArr;
}