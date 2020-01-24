var merge = function(nums1, m, nums2, n) {
    if( n == 0 ){ return; }
    if(nums1.length >= n+m ){
        var connect = nums1.slice(0,m);
        connect.push(...nums2.slice(0,n));
        connect.sort((a, b) => {
            return a - b;
          });
        nums1.splice(0,n+m,...connect);
    }else{
        return;
    }
};


// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]