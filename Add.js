function Add(numbers) {
    let ans = 0;
    [...numbers].map(n=>{
        if(n == null) return 0
        if(!isNaN(n))ans += parseInt(n)
    })
    return ans;
}
module.exports = Add