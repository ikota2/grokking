function createNode(value) {
	return {
		value,
		next: null
	}
}

function addNodeToLinkedList(head, value) {
	const newNode = createNode(value);

	if (!head) return newNode;

	let current = head;
	while (current.next) {
		current = current.next
	}
	current.next = newNode;
	return head;
}

const notLinkedList = null;
const zero = 0;
const one = 1;

const linkedList1 = addNodeToLinkedList(notLinkedList, zero);
const linkedList2 = addNodeToLinkedList(linkedList1, one);

console.log(linkedList2);

