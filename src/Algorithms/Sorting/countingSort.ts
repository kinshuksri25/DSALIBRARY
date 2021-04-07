/*
*   This function uses radix sorting to an array in an increasing order (Not comparision based)
*/


//Time complexity O(n)
//params = arr(object),n(number)
export default function countingSort(arr:number[],n:number){   
    
    let range = 0;
    let output:number[] = [];

    for(let i=0;i<n;i++){
        range = arr[i] > range ? arr[i] : range;
    }
    range++;

    let positionArray:number[] = [];
    for(let i=0;i<range;i++){
        positionArray[i]=0;
    }

    for(let i=0;i<n;i++){        
        ++positionArray[arr[i]];
    }
    
    for(let i=1;i<n;i++){
        positionArray[i]+=positionArray[i-1];   
    }

    for(let i=n-1;i>0;i--){
        output[positionArray[arr[i]] -1] =  arr[i]; 
        --positionArray[arr[i]];
    }
    arr = output;
}