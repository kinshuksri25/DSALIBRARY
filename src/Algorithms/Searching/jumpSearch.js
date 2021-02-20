/*
*   This function uses jump search to search for an element in a sorted array
*/

//TimeComplexity--> O(sqrt(n))
export function jumpSearch (arr,element,length){

    let interval = Math.floor(Math.sqrt(length));
    let i = 0;

    while(i<length){
        if(arr[i] == element){
            return i;
        }else if(arr[i] > element){
            break;
        }else {
            i+=interval;
        }
    }

    if(i < length){
        i-=interval;
        for(let j=i;j<=i+interval;i++){
            if(arr[i] == element){
                return i;
            }
        }
    }else{
        return -1;
    }
}