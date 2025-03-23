// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    const hqBlock = 42;
    return Math.abs(blockNumber - hqBlock);
}
function  distanceFromHqInFeet(blockNumber){
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(blockNumber) * feetPerBlock;
}
const feetPerBlock = 264;

function distanceTravelledInFeet(startBlock, endBlock){
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock){
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400){
        return 0;
    }else if (distance > 400 && distance <=2000){
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <=2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }
}
    