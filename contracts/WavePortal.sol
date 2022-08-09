// SPDX-License-Identifier: AFL-3.0
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract WavePortal {
    struct Input {
        string text;
        address sender;
    }

    Input[] private inputs;

    constructor() {}

    function createInput(string calldata text) public {
        inputs.push(Input(text, msg.sender));
    }

    function getInputs() public view returns (Input[] memory) {
        return inputs;
    }

    function getTotalInputs() public view returns (uint256) {
        return inputs.length;
    }
}
