/*
*   This function uses cycle sorting to an array in an increasing/decreasing order
*/


//Time complexity O(n*n)
//params = arr(object),n(number),increasing(boolean)
export default function cycleSort(arr,n,increasing=true){

    for(let i=0;i<n-1;i++){

        let pos = i;

        for(let j=i+1;j<n;j++){
            if(increasing){
                if(arr[j] < arr[i]){
                    pos++;
                }
            }else{
                if(arr[j] > arr[i]){
                    pos++;
                }  
            }
        }

        let temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;

        while(pos != i){
            pos = i;

            for(let j=i+1;j<n;j++){
                if(increasing){
                    if(arr[j] < arr[i]){
                        pos++;
                    }
                }else{
                    if(arr[j] > arr[i]){
                        pos++;
                    }  
                }
            }
    
            let temp = arr[i];
            arr[i] = arr[pos];
            arr[pos] = temp;
        }

    }

}