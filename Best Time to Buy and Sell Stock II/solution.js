/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profits = 0;
    let pricePaid = 0;
    let holding = false;

    prices.forEach((p, i) => {
        if (prices[i+1] > p && !holding) {
            /* Buy */
            holding = true;
            pricePaid = p;
        } else if ((p > prices[i+1] || i === prices.length - 1)  && holding) {
            /* Sell, taking profits less price paid */
            profits += p;
            profits -= pricePaid;
            holding = false;
            pricePaid = 0;
        }
    })
    return profits;
};

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.