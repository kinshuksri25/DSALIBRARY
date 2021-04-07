/*
*   This function uses merge sorting to an array in an increasing/decreasing order
*/


//TimeComplexity --> O(n*logn)
//params --> array(object),low(number),high(number),increasing(boolean)
export default function mergeSort(arr:number[],low:number,high:number,increasing:boolean=true){
    if(high >= low){
        let mid = (low+high)/2;
        mergeSort(arr,low,mid,increasing);
        mergeSort(arr,mid+1,high,increasing);
        merge(arr,low,mid,high,increasing);
    }
}


function merge(arr:number[],low:number,mid:number,high:number,increasing:boolean=true){
    let len1 = mid-low+1;
    let len2 = high-mid;
    let arr1 = arr.splice(low,mid+1);
    let arr2 = arr.splice(mid+1,high);
    let i=0,j=0,k=low;

    while (i < len1 && j < len2) {
        if(increasing){
            if (arr1[i] <= arr2[j]) {
                arr[k] = arr1[i];
                i++;
            }
            else {
                arr[k] = arr2[j];
                j++;
            }
        }else{
            if (arr1[i] > arr2[j]) {
                arr[k] = arr1[i];
                i++;
            }
            else {
                arr[k] = arr2[j];
                j++;
            }
        }
        k++;
    }

    while (i < len1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }

    while (j < len2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}