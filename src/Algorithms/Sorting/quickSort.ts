/*
*   This function uses quick sort to an array in an increasing/decreasing order
*/


//Time Complexity = O(nlogn)
//params = arr(object),start(number),end(number),increasing(boolean)
export default function quickSort(arr:number[],start:number,end:number,increasing:boolean=true){

    if(start < end-1){
        let pivot = lomutoPartition(arr,start,end);
        quickSort(arr,start,pivot,increasing);
        quickSort(arr,pivot+1,end,increasing);
    }
    return;
}


//Time Complexity = O(n)
//params = arr(object),start(number),end(number),increasing(boolean)
//returns pivot(number)
function lomutoPartition(arr:number[],start:number,end:number,increasing:boolean=true){

    //swapping with random variable to get a better chance for unsorted pivot element
    let randomPivotDigit = Math.floor(Math.random()*(end-1));
    let temp = arr[randomPivotDigit];
    arr[randomPivotDigit] = arr[end-1];
    arr[end-1]=temp;


    //partition
    let pivot=-1,counter=start;

    while(counter < end){
        if(increasing){
            if(arr[counter]<arr[end-1]){            
                pivot++;
                temp = arr[pivot];
                arr[pivot] = arr[counter];
                arr[counter] = temp;
            } 
        }else{
           if(arr[counter]>arr[end-1]){
                pivot++;
                temp = arr[pivot];
                arr[pivot] = arr[counter];
                arr[counter] = temp;
           }
        }
        counter++;
    }
    pivot++;
    temp = arr[pivot];
    arr[pivot] = arr[end-1];
    arr[end-1] = temp;

    return pivot;
}  