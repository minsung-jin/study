
// 근사값 알고리즘(Near Algorithm): 가까운 값 -> 차이값의 절대값의 최소값

// 원본 데이터 중에서 대상 데이터와 가장 가까운 값 구하기

(function() {
    // [0] Initialize
    var min = Number.MAX_SAFE_INTEGER;

    // [1] Input
    var numbers = [10, 20, 30, 27, 17];
    var target = 25;                    // target과 가까운 값
    var near = 0;                       // 가까운 값 : 27
    var N = numbers.length;

    // [2] Process: NEAR
    for (var i=0; i<N; i++) {
        var abs = Math.abs(numbers[i] - target);        // 차이값의 절대값
        if (abs < min) {
            min = abs;
            near = numbers[i];                          // 차이값의 절대값의 최소값
        }
    }

    // [3] Output
    console.log(target + "와/과 가장 가까운 값: " + near + "(차이: " + min + ")");
})();
