type Node<T> = {
    value: T;
    next?: Node<T>
}
export default class Stack<T> {
    public length: number;
    private tail: Node<T> | undefined


    constructor() {
        this.length = 0
    }

    push(item: T): void {
        const node = {value: item}
        this.length++
        if(!this.tail) {
            this.tail = node
            return
        }

        const newNext = this.tail
        this.tail = {...node, next: newNext}
}
    pop(): T | undefined {
        if(!this.tail) {
            return
        }
        this.length--
        const result = this.tail.value
        this.tail = this.tail.next
        return result
}
    peek(): T | undefined {
        return this.tail?.value
}
}
