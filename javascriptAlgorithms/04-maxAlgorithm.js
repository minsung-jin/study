
// 최대값 알고리즘 (Max Algorithm): 주어진 범위 + 주어진 조건의 자료들의 가장 큰 값

// 주어진 데이터 중에서 가장 큰 값

(function () {
    // [0] Initialize
    var max = Number.MIN_SAFE_INTEGER;      // 숫자 형식의 데이터 중 가장 작은 값으로 초기화

    // [1] Input
    var numbers = [-2, -5, -3, -7, -1];
    var N = numbers.length;

    // [2] Process: Max
    for(var i=0; i<N; i++) {
        if(numbers[i] > max) {              // 더 큰 데이터가 있다면
            max = numbers[i];               // MAX: 더 큰 값으로 할당
        }
    }

    // [3] Output
    console.log("최댓값: " + max)
})();
