function Add(numbers) { 
    let ans = 0,negativeError =[];
    let n = numbers.split(/,|\n/g);
    n.some((n)=>{
        if(n<0){
            negativeError.push(n)
        }
    })   
    if(negativeError.length > 0) return 'negatives not allowed '+[...negativeError]
    for(let i = 0; i < n.length; i++){
        ans += parseInt(n[i] || 0)
    }
    return ans;
}
module.exports = Add