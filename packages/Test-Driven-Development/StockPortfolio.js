class StockPortfolio {

    constructor(){
        this.stocks = [];
    }

    isEmpty() {
        return this.stocks.length === 0;
    }

    addStockAndShare(stock_ticker, shares) {
        if(shares !== 0){
            this.stocks.push({ stock:stock_ticker, share: shares })
            return true;
        }
        return false;
    }

    removeShareFromStock(stock_ticker, shares){
        const stockName = this.stocks.find((ticker) => ticker.stock === stock_ticker);

        if(stockName != undefined){

            if(stockName.share < shares){
                throw new Error("Not possible to sell this number of shares.");
            }

            stockName.share = stockName.share - shares;

            if(stockName.share === 0){
                this.stocks = this.stocks.filter((s) => s.stock !== stock_ticker);
            }
            return true;
        }

        return false;
    }

    countTicker(){
        return this.stocks.length
    }

    getShares(stock_ticker){

        const stockName = this.stocks.find((ticker) => ticker.stock == stock_ticker)

        if(stockName != undefined){
            return stockName.share;
        }

        return 0;
    }

}

exports.StockPortfolio = StockPortfolio;


