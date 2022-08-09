## Addresses
- The Ethereum blockchain is made up of accounts, which you can think of like bank accounts. Each account has an address, which you can think of like a bank account number. 
- It's a unique identifier that points to that account.

## Mappings
- These're another type of data structure that contains keys and values. Just like Maps in C++ and Hashmap in Java.
```
mapping (address => uint) public accountBalance;
```

## Msg.sender
- It's global variable that contains address of the person who called current function.
