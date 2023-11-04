export default function bs_list(haystack: number[], needle: number): boolean {
   let low = 0;
   let high = haystack.length
    while(low < high) {
       const m = Math.floor(low + (high - low) / 2)
        if(haystack[m] === needle) {
        return true
    }
        if(haystack[m] > needle) {
            high = m
        } else {
            low = m + 1
        }


    }
    return false
}

