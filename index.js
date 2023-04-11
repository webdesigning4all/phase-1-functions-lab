// Code your solution in this file!
// function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  // function to calculate distance from headquarters in feet
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; // assuming each block is 264 feet
  }
  
  // function to calculate distance travelled in feet
  function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264; // assuming each block is 264 feet
  }
  
  // function to calculate fare price based on start and destination blocks
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  