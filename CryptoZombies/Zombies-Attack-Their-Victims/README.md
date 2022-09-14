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

## Require
- Require ensures that the function will throw an error, if certain condition is not true. Just like throw and catch in JavaScipt.
```
function check(string _name) public returns (string){
  require(_name == "Srushti");
  return ("Hello, "+_name);
}
```

## Inheritance
- Just like classes can be inherited in C++ and Java. Contracts can also be inherited.
```
contract super_contract {
  //empty contract
}
contract child_contract is super_contract{
  //empty contract
}
```

## Storage Vs Memory
- Storage refers to variables stored permanently on the blockchain. 
- Memory variables are temporary, and are erased between external function calls to your contract.

## Internal Vs External
- Internal is the same as private, except that it's also accessible to contracts that inherit from this contract.
- External is similar to public, except that these functions can only be called outside the contract.

## Handling Function returning multiple values
- The functions in solidity can return multiple values. To fetch the specific value out of all returning values a specific syntax is used.
```
function myExample(uint _id) public returns (
    bool check1,
    bool check2,
    uint256 A,
    uint256 b,
    uint256 c,
    uint256 d
    );
    // To get varible A from given function
    uint k;
    (,,k) = myExample(1234567890); 
```
