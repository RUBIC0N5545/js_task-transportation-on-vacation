'use strict';

/**
 * After a hard quarter in the office you decide
 * to get some rest on a vacation.
 * So you will book a flight for you
 * and your family and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your vacation.
 * The manager of the car rental makes you some good offers.
 *
 * Every day you rent the car costs $40.
 * If you rent the car for 7 or more days, you get $50 off your total.
 * Alternatively, if you rent the car for 3 or more days,
 * you get $20 off your total.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
 *
 * Examples:
 *  - calculateRentalCost(1) === 40
 *  - calculateRentalCost(3) === 100
 *  - calculateRentalCost(7) === 230
 *
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISC = 50;
  const SHORT_TERM_DISC = 20;
  const NORMAL_COST = 40;
  let cost = 0;
  let k = 1;

  cost = NORMAL_COST * days;

  if (days >= LONG_TERM) {
    for (let j = 1; j <= days; j += LONG_TERM) {
      cost -= LONG_TERM_DISC;
    }

    return cost;
  }

  for (let i = 1; i <= days; i++) {
    k++;

    if (k === 4) {
      cost -= SHORT_TERM_DISC;
      k = 0;
    }
  }

  return cost;
}

module.exports = calculateRentalCost;
