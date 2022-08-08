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

removing from the head and tail:

removing the head:
- update the pointer at the beginning of the list
- set the previous pointer of the new head (or, the element directly after the current head) to null
- update the head property of the list
- if the head was also the tail, the tail reoval process will occur as well

removing the tail:
- similarly, removing the tail involves updating the pointer at the end of the list
- set the next pointer of the new tail (the element directly before the tail) to null
- update the tail property of the list
- if the tail was also the head, the head removal process will occur as well

removing from the middle of the list:
- it is possible, but involves two updates:
1) must set the removed node's preceding node's next pointer to it's following node
2) set the removed node's following node's previous pointer to its preceding node

summary of doubly linked lists:
- they're bidirectional, meaning we can traverse in both directions
- have pointer to single head node, which serves as the first node in the list
- have pointer to a single tail node, which serves as the last node in the list
- require the pointers at the tail of the list to be updated after addition to or removed of the tail
- require the pointers of surrounding nodes to be updated after removal from the middle of the list

examples of doubly linked lists:
- browser history 