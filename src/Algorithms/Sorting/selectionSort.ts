/*
*   This function uses selection sorting to an array in an increasing/decreasing order
*/


//TimeComplexity --> O(n*n)
//params --> array(object),n(number),increasing(boolean)
export default function selectionSort(arr:number[],n:number,increasing:boolean=true){
    for(let i=0;i<n;i++){
        let selIndex = i;
        let minValue = arr[0];
        let maxValue = arr[0];
        for(let j=i;j<n;j++){
            if(increasing){
                if(arr[j] < minValue){
                    minValue = arr[j];
                    selIndex = j;
                }
            }else{
                if(arr[j] > minValue){
                    maxValue = arr[j];
                    selIndex = j;
                }
            }
        }
        if(selIndex != i){
            let swap = arr[i];
            arr[i] = arr[selIndex];
            arr[selIndex] = swap;
        }
    }
}