/* if ticket number is less than 100, ticket price is:100
if ticket number is more than 100 but less than 200, first 100 ticket price will be 100/piece but rest will be 90 taka....
if ticket number is more than 200,, then first 100 will be 100taka, 101-200 will be 90 taka, rest of them will be 70 taka.... */

function ticketPrice(ticketNumber) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;

    if (ticketNumber <= 100) {
        const price = ticketNumber * first100Rate;
        return price;
    }
    else if (ticketNumber <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketNumber - 100;
        const second100Price = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + second100Price;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketNumber - 200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

console.log(ticketPrice(300));