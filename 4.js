var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [];
    let mid = 0;
    arr = [...nums1, ...nums2].sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
    console.log(arr)
    if (arr.length % 2 == 0) {
        mid = (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
        console.log("偶:" + mid)
    } else {
        mid = arr[Math.floor(arr.length / 2)];
        console.log("奇:" + mid)
    }
    return mid

};

findMedianSortedArrays([1, 2], [3, 4]);