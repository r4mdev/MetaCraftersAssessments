## Metacrafters Assessment
This is a simple basic code to public smart contracts to ethereum network.
we can use https://remix.ethereum.org/ to develop, deploying and administrering smart contracts.

### myToken.sol
myToken.sol is a basic smart contract

1. The contract begins with a solidity version as specified by `pragma solidity 0.8.18;`.
2. There are three public variables - tokenName (string), tokenAbbrv (string), and totalSupply (uint). These store the name of the token, its abbreviation, and the current total supply of tokens respectively.
3. The contract includes a mapping from addresses to balances. This allows for quick lookup of an address's balance in the contract.
4. The mint function is used to create new tokens. It increases the total supply by the specified value and increases the sender's (the caller's) balance by that same amount.
5. The burn function destroys tokens from a specific address. It first checks if the sender has enough balance to cover the withdrawal request, if yes then it decreases the total supply by the requested amount and updates the sender's balance accordingly. If not, it doesn’t perform any action.
6. This contract does not include any events or modifiers for better code readability and efficiency.
7. It fulfills the basic requirements of an ERC20 token which includes a mint function to create new tokens and a burn function to destroy existing tokens, as well as storing balances and total supply in a mapping.
