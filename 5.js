var longestPalindrome = function (s) {
    let arr = [];
    let account = [];
    s = Array.from(s);
    for (let i = 0; i < s.length; i++) {

        if (arr.indexOf(s[i]) != -1) {
            arr.push(s[i]);
            account = arr.length + 1 >= account.length ? arr : account;
            console.log("arr:" + arr);
            console.log("account:" + account);
            arr.shift();
        } else {
            arr.push(s[i]);

        }

    }
    return arr.length > account ? arr : account
};

longestPalindrome("babad");