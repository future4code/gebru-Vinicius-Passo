class Stack {
    constructor(
        public itens: any[] = [],
        public length: number = 0
    ) {}


    push(item: any) {
        this.itens[this.length] = item
        this.length ++
    }

    pop() {
        if(this.length === 0) {
            console.log("Empty Stack")
        } else {
            this.length --
            const removeItem = this.itens[this.length]
            this.itens.length = this.length
            return removeItem
        }
    }

    peek() {
        return this.itens[this.length -1]
    }
}

const stack = new Stack();

stack.push("vitor")
stack.push("vinicius")
stack.push("caila")
stack.push("benjamin")

console.log(stack)

console.log(stack.pop())
console.log(stack.peek())