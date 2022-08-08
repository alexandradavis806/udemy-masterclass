Doubly Linked Lists:

adding to the head: 
- set the current head's previous pointer to our new head
- set the new head's next pointer to the current head
- set the new head's previous pointer to null

adding to the tail:
two cases:
1) list is empty:
- create new node and make the head and tail of the list and set the pointers to null
2) list is not empty:
- set the current tail's next pointer to the new tail
- set the new tail's previous pointer to the current tail 
- set the new tail's next pointer to null