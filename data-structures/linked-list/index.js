// define a new class for a node

// --> node in a linked list has two properties: data and next
// --> data is the value of the node
// --> next is a pointer to the next node in the linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }

    remove(data) {
        if (!this.head) {
            return
        }

        if (this.head.data === data) {
            this.head = this.head.next
            return
        }

        let current = this.head;
        let prev = null;

        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (!current) {
            return;
        }
        prev.next = current.next;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    insertAfter(existingData, newData) {
        const newNode = new Node(newData);

        let current = this.head;

        while (current) {
            if (current.data === existingData) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }

            current = current.next;
        }
    }

    insertBefore(existingData, newData) {
        const newNode = new Node(newData);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        if (this.head.data === existingData) {
            // if the specified node is the head, insert before the head
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current) {
            if (current.data === existingData) {
                newNode.next = current;
                prev.next = newNode;
                return;
            }

            prev = current;
            current = current.next;
        }
    }

    deleteNode(data) {
        let current = this.head;
        let prev = null;

        if (!current) {
            return;
        }

        if (current.data === data) {
            current = current.next;
            return;
        }

        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (!current) return;

        prev.next = current.next;

    }

    search(data) {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                return true;
            }

            current = current.next;
        }
        return false;
    }

}



const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(3);
linkedList.append(4);

console.log("original linked list")
linkedList.print();

linkedList.append(5);

console.log("linked list after appending")
linkedList.print();

console.log("linked list after removing a node")
linkedList.remove(3);
linkedList.print()

console.log("reversing the linked list")
linkedList.reverse()
linkedList.print()


console.log("inserting after node 4");
linkedList.insertAfter(4, 10);
linkedList.print();


console.log("inserting before node 10")
linkedList.insertBefore(10, 11);
linkedList.print();

console.log("deleting node 11");
linkedList.deleteNode(11);
linkedList.print()

console.log("deleting node 10")
linkedList.deleteNode(10);
linkedList.print();

console.log("deleting a node that does not exist")
linkedList.deleteNode(299);
linkedList.print();

console.log("searching for a node")
const found = linkedList.search(10);
console.log(found)