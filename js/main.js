var account = {
    AccountTitle: "Momina asif",
    AccontBalance: 10000,
    AccountCurrency: "PKRS",
    IBAN_NO: "1234",


    display: function () {


        document.getElementById("title").innerHTML = account.AccountTitle;
        document.getElementById("balance").innerHTML = account.AccountBalance;
        document.getElementById("currency").innerHTML = account.AccountCurrency.;
        document.getElementById("IBAN").innerHTML = account.IBAN;
    }
}
    Function checkAmount (amount) {
        var valid;
        if (typeof amount === "number") {
            valid = true;
        } else {
            valid = false;
        }
        return valid;
    }
// Deposits amount to account
    function deposit(AccountTitle, AccontBalance)
{
    var valid = checkAmount(AccontBalance);
    var foundUser = getAccount(username, accounts);
    if (valid && foundUser) {
        var deposited = foundUser.balance + AccontBalance;
        console.log("You have deposited $" + AccontBalance + ". Your account balance is $" + deposited + ".");
        return foundUser.balance += AccontBalance;
    } else {
        console.log("Please enter a number to deposit");
    }
}

// Withdraws amount from account
function withdraw(AccountTitle, AccontBalance) {
    var valid = checkAmount(AccontBalance);
    var foundUser = getAccount(username, accounts);
    if (valid && foundUser) {
        if (amount > foundUser.balance) {
            console.log("I am sorry, you do not have enough funds");
        } else {
            return foundUser.balance -= AccontBalance;
        }
    } else {
        console.log("Please enter a number to deposit");
    }
}

// Gets account balance
function getBalance(AccountTitle) {
    var foundUser = getAccount(username, accounts);
    if (foundUser) {
        console.log("Your account currently has $" + foundUser.balance + " balance.");
    } else {
        console.log("There is no account matching");
    }
}

