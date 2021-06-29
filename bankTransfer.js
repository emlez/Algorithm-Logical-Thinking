// Transfer money algorithm

let clientBank = "CitiBanamex"; //Change to false or another bank name to try.
let clientAccount = true; // Change to false and see what happens.
let clientBalance = 1000000; // Change to whatever number you feel like it.
let destinationBank = "CitiBanamex"; // Change to false or another bank name to try.
let destinationAccount = true; // Change to false and see what happens.
let transferHour = 10; // Change to any 24 hour number you'd like.
let transferAmount = 1000000; // Change the amount you'd like to transfer.

if (clientBank) {
  if (destinationBank) {
    if (clientAccount) {
      if (destinationAccount) {
        if (
          (9 <= transferHour && transferHour <= 12) ||
          (15 <= transferHour && transferHour <= 20)
        ) {
          if (clientBank == destinationBank) {
            let transferFee = 0;
            if (clientBalance >= transferAmount) {
              console.log("Transfer Completed!");
            } else {
              console.log("Insufficient Funds.");
            }
          } else {
            let transferFee = 100;
            if (clientBalance >= transferFee + transferAmount) {
              console.log("Transfer Completed!");
            } else {
              console.log("Insufficient Funds.");
            }
          }
        } else {
          console.log("Service only available during working hours.");
        }
      } else {
        console.log("Destination account number is not verified.");
      }
    } else {
      console.log("Own account number is not verified.");
    }
  } else {
    console.log("Destination bank is not verified.");
  }
} else {
  console.log("Bank not verified.");
}
