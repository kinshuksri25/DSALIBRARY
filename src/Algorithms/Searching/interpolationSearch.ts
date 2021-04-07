/*
*   This function uses interpolation search to search for an element in a sorted array, values of which are distributed uniformly
*/

//TimeComplexity--> O(logn)
export function interpolationSearch(arr : number[],element:number,length:number){

    let hi:number = length-1;
    let lo:number = 0;
    let pos:number;

    do{
        pos = lo + (((hi - lo) / (arr[hi] - arr[lo])) * (element - arr[lo]));
        if (arr[pos] == element)
            return pos;

        if (arr[pos] < element)
            lo = pos+1;  

        if (arr[pos] > element)
            hi = pos-1;

    }while(lo <= hi && element >= arr[lo] && element <= arr[hi]);

    return -1;
}