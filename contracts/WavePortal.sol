//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    uint256 cupsofCoffee;

    constructor() {
        totalWaves = 0;        //proper initialization
        cupsofCoffee = 100;    //default amount
        console.log("WavePortal constructor(), output from DaveFRomYEG");
        console.log("starting with %d cups of coffee", cupsofCoffee);
    }

    function drinkCoffee(uint256 numCups) public {
        //this would be a local variable
        //require((cupsofCoffee - numCups) > 0,"too many cups ordered");
        if (numCups < cupsofCoffee) {
            cupsofCoffee = cupsofCoffee - numCups;
            console.log("%s ordered %d coffee cups, what is left is %d", msg.sender, numCups, cupsofCoffee);
        } else {
            console.log("there is not enough cups of Coffee left to fulfil order of %d",numCups);
        }
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waived, added to the value", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("total waves : %d", totalWaves);
        return totalWaves;
    }
}