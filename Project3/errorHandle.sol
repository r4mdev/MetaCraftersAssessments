/*
    Name: smartContract.sol
    Author: Malladi Janaki Ram
    Date: 26th Jun 2024
    Description: Etherum smart contract implementing error handling using require(), assert() and revert() statements.
*/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


contract errorHandle {

    error showError(string _msg);

    function getInput(uint _num) public pure {
        require(_num <= 10, "required input must be less than 10");
    }

    function getInput2(uint _num) public pure {
        assert(_num > 100);
    }

    function getData(string memory _name) public pure {
        if(keccak256(abi.encodePacked(_name)) == keccak256("ram")) {
            revert("User `ram` has been baned!");
        }
    }

}
