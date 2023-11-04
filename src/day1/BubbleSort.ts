export default function bubble_sort(arr: number[]): void {
    let switches = true;
    let end = arr.length
    while(switches) {
        let i = 0;
        switches = false;
        while(i < end - 1) {
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                switches = true
            }
            i++
        }
        end--
    }
}
