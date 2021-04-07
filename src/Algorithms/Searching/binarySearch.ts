
//TimeComplexity --> O(logn)
export function binarySearch(arr : number[],element:number,length : number){
    let high:number = length;
    let low:number = 0;
    let mid:number = low+high/2;

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