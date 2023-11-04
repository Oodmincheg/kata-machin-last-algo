export default function two_crystal_balls(breaks: boolean[]): number {
    let ballsAmounts = 2;
    const step = Math.sqrt(breaks.length)
    let prev = 0
    let next = prev + Math.floor(step)

    while(next < breaks.length) {
        if(breaks[next]) {
            for(let i = prev; i < next; i++) {
                if(breaks[i]) return i
            }
        }
        [prev, next] = [next, next + step]
    }
    return -1
}
