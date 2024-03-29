// 평균 알고리즘 (Average Algorithm) : 주어진 범위에 주어진 조건에 해당하는 자료들의 평균

// n명의 점수 중에서 80점 이상 95점 이하인 점수의 평균

(function () {
    // [1] Input
    var data = [90, 65, 78, 50, 95];
    var sum = 0;        // 합계 담는 그릇
    var count = 0;      // 개수 담는 그릇
    var N = data.length;
    
    // [2] Process : AVG = SUM / COUNT
    for (var i=0; i<N; i++) {                   // 주어진 범위
        if (data[i] >=80 && data[i] <=95) {     // 주어진 조건
            sum += data[i];
            count++;
        }
    }
    var avg = 0.0;
    if (sum !=0 && count !=0) { // 예외처리
        avg = sum / count;      // AVERAGE
    }

    // [3] Output
    console.log("80점 이상 95점 이하인 자료의 평균: " + avg.toFixed(2));
})();
