## Version Pragma
- It is the version of the solidity compiler that should be declared at starting.
```
version pragma >=0.5.0 <0.6.0;
```

## Contracts
- Solidity's code is encapsulated in contracts. Just like class in java.
- A contract is the fundamental building block of Ethereum applications - all variables and functions belong to a contract.
```
contract HelloWorld {
  // empty contract
}
```

## State Variables
- These're permanently stored in contract storage.
```
contract HelloWorld {
  uint num = 12345;   //uint is unsigned integer.
}
```

## Structs
- A datatype that can contain mupltiple variables of different datatypes.
```
struct Zombie {
  uint dna;
  string name;
}
```

## Arrays
- A datatype that can contain multiple values of same datatype.
- There are two types of arrays in solidity : Fixed & Dynamic
```
uint[2] fixed_array = {1,2};
uint[] dynamic_array;
dynamic_array.push(3);
```

## Arrays of Struct
```
struct Zombie {
  uint dna;
  string name;
}
Zombie Z = Zombie(123456789,"Srushti");
Zombie[] arr;
arr.push(Z);
```

## Functions
- A block of code that runs/executes when called. 
```
function HelloWorld(string name){
  // do nothing
}
```

- The parameters in functions can be passed by two ways : By Value & By reference.
```
function fn1(string name){
  // pass by value
}

function fn2(string memory name){
  // pass by reference
}
```

- We can also assign accessibility to functions.
```
function fn1() public {}
function fn2() private {}
```

- Functions can also return a value.
```
function _greetings(string greet) returns (string){
 return greet;
}
```

## TypeCasting
- Converion from one data type to other.
```
uint8 a = 8;
uint b = uint(8);
```
