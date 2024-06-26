# MetaCrafters Assessment

A mini project to submit MetaCrafters Assessment.

## Description

This mini project has been developed as a part of **MetaCrafters Training Course**. To learn about `Error Handleing` in smart contracts in solidity.
This is basic smart contract implementing error handling using `require()`, `assert()`, `revert()` and custom errors statements. For more information about error handling [Error Handleing](https://docs.soliditylang.org/en/v0.8.26/control-structures.html#error-handling-assert-require-revert-and-exceptions).

## Explaination

### require

Keywork `require` which check the given condition and if it doesn't true, it stops execution. We can pass optional parameter to print a error message on console.

``` solidity
function getInput(uint _num) public pure {
        require(_num <= 10, "required input must be less than 10");
    }
```
### assert

Keyword `assert` which check the given condition and if it is false, it reverts the execution. It only accept one parameter that is condition.

``` solidity
function getInput2(uint _num) public pure {
       assert(_num > 100);
   }
```
### revert

Keyword `revert` which used to check complex conditional statements using if/else of switch statements. We pass an error, to print message when execution is reverted. Remain gas will be get back to user account.

``` solidity
function getData(string memory _name) public pure {
        if(keccak256(abi.encodePacked(_name)) == keccak256("ram")) {
            revert("User `ram` has been baned!");
        }
    }
```
## Getting Started
- To get started with solidity you need solidity compiler. (Install solidity compiler)[https://docs.soliditylang.org/en/latest/installing-solidity.html].

## Authors

Contributors names and contact info

Malladi Janaki Ram - [@r4mdev](https://github.com/r4mdev)
