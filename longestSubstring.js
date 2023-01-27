function LCSubStr(X, Y){
    
    let m = X.length
    let n= Y.length
    
    let result=0
    
    let end
    
    let len = new Array(2)
    
    for(let i = 0; i<len.length; i++){
        
        len[i] = new Array(n)
        for(let j=0; j<n;j++) {
            len[i][j] = 0
        }
    }
    
    let currRow = 0
    
    for(let i = 0; i<=m; i++){
        for(let j=0; j<=n; j++) {
            if(i==0 || j==0){
                len[currRow][j] =0
            }
            else if( X[i-1] ==Y[j-1]){
                len[currRow][j] = len[1-currRow][j-1] +1
                
                if(len[currRow][j] > result) {
                    result = len[currRow][j]
                    end = i -1
                }
            }
            else {
                len[currRow][j] =0
            }
        }
        currRow = 1 - currRow
    }
    
    if(result ==0) {
        return "-1"
    }
    
    return X.substr(end-result+1, result)
}

console.log(LCSubStr("ABCDEFGHI", "DFREFGIW"))
