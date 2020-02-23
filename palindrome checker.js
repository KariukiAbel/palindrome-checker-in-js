function palindrome(string) {
    return (
        string.replace(/[\W_]/g, "").toLowerCase() === string.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
    );
}
console.log(palindrome("Bob"))
console.log(palindrome("Kenya"))
console.log(palindrome("eye"))
console.log(palindrome("My age is 0, 0 si ega ym"))
console.log(palindrome("race car"))
