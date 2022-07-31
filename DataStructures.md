Examples of DS in day to day life:

- Stack data structure is used in implementing redo and undo feature

- Arrays are used to build bitmap images

- Storing the friendship information of friends on a social media site - graph data structure

Data types vs abstracted data types:

Data type:
1. defines a certain domain of values
2. defines operations allowed on those values

user defined data types: the opertions and values of user defined data types are not specificed in the language itself but by the user
- ex: structure, union, and enumeration 
- by using structures, we are defining our own type by combining other data types

abstract data types (ADTs):
- like user defined data stypes which difines operations on values using FUNCTIONS without specifiying what is there inside the function and how the operations are performed
- ex: stack: elements of same type are allowed in the stack
    - operations: initialize, push, pop, isEmpty, isFull

there are multiple ways to implement an ADT
- example: a stack ADT can be implemented using arrays or linked lists

the program that uses data structures is called a CLIENT program 
it has access to the ADT, ie interface

ADT provides abstraction, which means it hides the details from the user