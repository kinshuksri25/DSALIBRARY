/*
*   This function uses jump search to search for an element in a sorted array
*/

//TimeComplexity--> O(sqrt(n))
export function jumpSearch (arr:number[],element:number,length:number):number{

    let interval:number = Math.floor(Math.sqrt(length));
    let i:number = 0;

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
        i = -1;
    }
    return i;
}