// SPDX-License-Identifier: AFL-3.0
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract WavePortal {
    struct Input {
        string text;
        address sender;
    }

    event NewMessage(address indexed from, uint256 timestamp, string message);
    event NewPrize(address indexed from, uint256 timestamp);

    Input[] private inputs;
    mapping(address => bool) public uniqueMessagesRegistry;
    uint256 private seed;
    uint256 private probability = 10;
    uint256 prizeAmount = 0.0001 ether;

    constructor() payable {
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function createInput(string calldata _message) public {
        require(uniqueMessagesRegistry[msg.sender] != true, "Already sent the message");

        inputs.push(Input(_message, msg.sender));
        uniqueMessagesRegistry[msg.sender] = true;

        seed = (block.difficulty + block.timestamp + seed) % 100;

        if (checkUserWon()) {
            sendPrize();
        }

        emit NewMessage(msg.sender, block.timestamp, _message);
    }

    function checkUserWon() private view returns (bool) {
        return ((block.difficulty + block.timestamp + seed) % 100) <= probability;
    }

    function sendPrize() private {
        require(
            prizeAmount <= address(this).balance,
            "Trying to withdraw more money than the contract has."
        );
        (bool success, ) = (msg.sender).call{value: prizeAmount}("");
        require(success, "Failed to withdraw money from contract.");

        emit NewPrize(msg.sender, block.timestamp);
    }

    function getInputs() public view returns (Input[] memory) {
        return inputs;
    }

    function getTotalInputs() public view returns (uint256) {
        return inputs.length;
    }
}
