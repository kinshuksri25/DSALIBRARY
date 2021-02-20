/*
*   This function uses binary search to search for an element in a sorted array
*/

//TimeComplexity --> O(logn)
export function binarySearch (arr,element,length){

    let high = length;
    let low = 0;
    let mid = low+high/2;

    while(high >= low){
        if(arr[mid] == element){
            return mid;
        }else if(arr[mid] > element){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
}