function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let totalCid = 0;

  const currencyUnits = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  cid.forEach((element) => {
    totalCid += element[1];
  });

  totalCid = Number(totalCid.toFixed(2));

  if (changeDue > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDue === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  cid.reverse();

  var change = [];

  for (let i = 0; i < cid.length; i++) {
    let amount = 0;

    while (changeDue >= currencyUnits[cid[i][0]] && cid[i][1] > 0) {
      changeDue -= currencyUnits[cid[i][0]];
      changeDue = changeDue.toFixed(2);
      cid[i][1] -= currencyUnits[cid[i][0]];
      amount += currencyUnits[cid[i][0]];
    }

    if (amount > 0) {
      change.push([cid[i][0], amount]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
