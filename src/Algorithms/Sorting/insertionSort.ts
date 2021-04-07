/*
*   This function uses insertion sorting to an array in an increasing/decreasing order
*/


//TimeComplexity --> O(n*n)
//params --> array(object),n(number),increasing(boolean)
export default function insertionSort(arr:number[],n:number,increasing=true){
    for(let i=1;i<n;i++){
        let tempPos = i;
        for(let j=i-1;j>=0;j--){
            if(increasing){
                if(arr[i]<arr[j]){
                    tempPos = j;
                }
            }else{
              if(arr[i]>arr[j]){
                    tempPos = j;
                }
            }
        }
        if(tempPos!=i){
            let temp = arr[i];
            let j = i-1;
            while(j>=tempPos){
                arr[j+1] = arr[j];
                j--;
            }   
            arr[tempPos] = temp;
        }
    }
}