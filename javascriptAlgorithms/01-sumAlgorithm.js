
// 합계 알고리즘(Sum Algorithm): 주어진 범위에 주어진 조건에 해당하는 자료들의 합계

// n명의 점수 중에서 80점 이상인 점수의 합계를 구하시오.

(function () {
    // [1] Input
    var scores = [100, 75, 50, 35, 90, 95];
    var sum = 0;
    var N = scores.length;

    // [2] Process: 합계 알고리즘 영역: 주어진 범위에 주어진 조건(필터링)
    for (var i=0; i<N; i++) {
        if (scores[i] >= 80) {
            sum += scores[i];
        }
    }
    
    // [3] Output
    console.log(N + "명의 점수 중 80점 이상의 총점: " + sum);
})();
