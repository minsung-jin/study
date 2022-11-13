
// 최빈값 알고리즘(Mode Algorithm): 점수 인덱스의 갯수의 최대값

// 주어진 데이터에서 가장 많이 나타난(중복된) 값

(function () {
    // Input: 범위는 0부터 n점까지의 점수만 들어온다고 가정
    var score = [1, 3, 4, 3, 5, 2];        // 0~5까지만 들어온다고 가정
    var index = Array(6).fill(0);       // 0~5까지 점수 인덱스의 갯수 저장
    var max = Number.MIN_SAFE_INTEGER;  // Max 알고리즘 적용
    var mode = 0;

    // Process: Data -> Index -> Count -> Max -> Mode
    for (var i=0; i<score.length; i++) {
        index[score[i]]++;              // COUNT
    }
    for (var i=0; i<index.length; i++) {
        if (index[i] > max) {
            max = index[i];
            mode = i;
        }
    }

    // Output
    console.log("최빈값: " + mode + " -> " + max + "번 나타남");
})();
