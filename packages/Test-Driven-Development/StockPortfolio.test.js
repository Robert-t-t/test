const myObject = require('./StockPortfolio.js')

// 2.1
test('Testing Create portfolio', () => {
    const portfolio = new myObject.StockPortfolio();

    const target = {};

    const result = portfolio.stocks;

    expect(target).toStrictEqual(target);
});

// 2.2
test('Testing new portfolio start empty', () => {
    const portfolio = new myObject.StockPortfolio();
   
    const target = true;
    const result = portfolio.isEmpty();

    expect(target).toBe(result);
})

// 2.3
test('Testing Adding stock ticker symbole and number of share', () => {
    const portfolio = new myObject.StockPortfolio();

    const target = true;
    const result = portfolio.addStockAndShare("AAPL", 5);

    expect(target).toBe(result);
});

// 2.4
test('Testing Subtracting number of shares from a stock ticker', () => {
    const portfolio = new myObject.StockPortfolio();
    portfolio.addStockAndShare("AAPL", 5);

    const target = true;
    const result = portfolio.removeShareFromStock("AAPL", 1);

    expect(target).toBe(result);
});

// 2.5
test('Testing  Counting ticker', () => {

    const portfolio = new myObject.StockPortfolio();
    portfolio.addStockAndShare("GMR", 5);
    portfolio.addStockAndShare("RBLX", 10);

    const target = 2;
    const result = portfolio.countTicker();

    expect(target).toBe(result);
});

// 2.6
test('Testing remove stocks with 0 shares by add', () => {

    const portfolio = new myObject.StockPortfolio();
    portfolio.addStockAndShare("GMR", 5);
    portfolio.addStockAndShare("RBLX", 0);

    const target = 1;
    const result = portfolio.countTicker();

    expect(target).toBe(result)
});
// pt.2 for 2.6 testing 
test('Testing remove stocks with 0 shares by remove', () => {

    const portfolio = new myObject.StockPortfolio();
    portfolio.addStockAndShare("GMR", 5);
    portfolio.removeShareFromStock("GMR", 5);

    const target = 0;
    const result = portfolio.countTicker();

    expect(target).toBe(result)
});

// 2.7
test('Testing getShares for a existing symbol', () => {

    const portfolio = new myObject.StockPortfolio();
    portfolio.addStockAndShare("GMR", 5);
    portfolio.addStockAndShare("RBLX", 10);

    const target = 10;
    const result = portfolio.getShares("RBLX");

    expect(target).toBe(result);
});

test('Testing getShares for a nonexisting symbol', () => {

    const portfolio = new myObject.StockPortfolio();

    const target = 0;
    const result = portfolio.getShares("RBLX");

    expect(target).toBe(result);
});

// 2.8

test('Testing sell more shares than acutally own', () => {
    const portfolio = new myObject.StockPortfolio();
    portfolio.addStockAndShare("RBLX", 10);

    expect(() => {
        portfolio.removeShareFromStock("RBLX", 100);
    }).toThrow("Not possible to sell this number of shares.")
});

/*
When I first started this assignment I was confused on what it meant to TDD, but I honestly really 
like this way of programming since it lets you create the test or seek the result you are after for
rather than just programming blindly.

This is huge level up for me since I can see this being us for huge project that has thousands of lines of code and how 
refactoring really can shorten and clear up the function logic.

I feel like i through out the increments, i understood what i need to code but after i was done coding the minimum to satisfy the test
that when I use a refactoring hat and see what i can clean up and make my code look readable for anyone to review my code.

Very fun assignment and will use this skill for my group project!
*/








