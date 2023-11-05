type Node<T> = {
    value: T;
    next?: Node<T>
}
export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;


    constructor() {
        this.length = 0
    }

    enqueue(item: T): void {
        console.log('was enqueue ')
        const node = {value: item}
        this.length++
        if(!this.tail) {
            this.tail = this.head = node
            return
        }
        this.tail.next = node
        this.tail = node
}
    deque(): T | undefined {
        if(!this.head) {
            console.log('empty head. length is ', this.length)
            return
        }
        this.length--
        if(this.length === 0) {
            this.tail = undefined
        }
        const result = this.head.value
        this.head = this.head.next
        return result
}
    peek(): T | undefined {
        return this.head?.value
}
}
