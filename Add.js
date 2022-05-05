function Add(numbers) {
    let ans = 0;
    let n = numbers.split(/,|\n/g);
    for(let i = 0; i < n.length; i++){
        ans += parseInt(n[i] || 0)
    }
    return ans;
}
module.exports = Add