# 1 알고리즘(Algorithm)과 절차 지향 프로그래밍
알고리즘을 바탕으로 입력, 처리, 출력의 단계로 진행되는 프로그래밍 언어의 절차 지향 프로그래밍 기법을 정리

## 1.1 알고리즘(Algorithm)
알고리즘이란 프로그램 개발에 있어서 필요한 문제를 해결하는 방법을 체계적으로 정리하는 방법.
주어진 문제를 어떻게 풀이하는가에 따라서 그 문제를 해결할 수도 있고 그렇지 못할 수도 있는 것
이 때문에 프로그램 작성에 있어 알고리즘이란 중요한 자리를 차지하고 있다.

* 알고리즘은 "문제 해결 능력" 입니다.
* 프로그램의 가장 작은 단위는 일반적으로 입력(Input) -> 처리(Process) -> 출력(Output)의 단계를 거치는데, 여기서 처리의 단계가 알고리즘의 단계로 보면 됩니다.
    + 입력 : 자료구조(Data Structure)가 담당하는 영역
        - 변수 및 배열의 데이터가 사용되고, 더 나아가서는 컬렉션, 파일, 데이터베이스의 데이터
    + 처리 : 알고리즘 영역
    + 출력 : UI가 담당하는 영역
        - 콘솔, 데스크탑, 웹, 모바일 등의 영역으로 가공된 데이터가 출력됩니다.

### 1.1.1 순서도(FlowChart)
알고리즘을 정해진 기호로 표시한 것을 순서도라고 합니다.

## 1.2 학습용 쉬운 알고리즘
학습용 알고리즘은 주어진 자료를 가지고 최대값, 최소값, 누적합, 횟수/건수, 평균, 정렬 등이 있습니다.

* 합계(SUM): 합계를 출력하시오.
* 개수(COUNT): 자료 건수를 출력하시오.
* 평균(AVERAGE): 평균을 출력하시오.
* 최대값(MAX): 최대값을 출력하시오.
* 최소값(MIN): 최소값을 출력하시오.
* 근사값(NEAR): ~에 가장 가까운 값을 구하시오.
* 순위(RANK): 순위를 구하시오.
* 정렬(SORT): ~에 대해서 오름차순/내림차순 정렬하시오.
* 검색(SEARCH): 특정 자료를 검색하시오.
* 병합(MERGE): 2개의 배열을 하나의 배열로 합치시오.
* 최빈값(MODE): 가장 빈도수가 높은 자료를 구하시오.
* 그룹(GROUP): 특정 항목별 그룹화하여 소계를 구하시오.

## 1.1 정렬(SORT) 알고리즘

### 1.1.1 정렬(SORT) 알고리즘
주어진 범위내에서 불규칙적으로 나열된 순서를 일정 기준에 따라 순서대로 나열하는 알고리즘이다. 정렬 알고리즘은 선택 정렬(Selection Sort), 버블 정렬(Bubble Sort), 퀵 정렬(Quick Sort) 등 많이 있는데 여기서는 선택 정렬 알고리즘만 사용할 것이다.

* 오름차순(ASCeding) 정렬은 1, 2, 3 순으로 작은 것부터 큰 순으로 정렬
    + 1, 2, 3
    + 가, 나, 다
    + A, B, C
* 내림차순(DESCending) 정렬은 3, 2, 1 순으로 큰 것 부터 작은 순으로 정렬
    + 3, 2, 1
    + 다, 나, 가
    + C, B, A

### 1.1.2 선택정렬(Selection Sort) 알고리즘
데이터 하나를 기준으로 나머지 데이터와 비교하여 가장 작거나 큰 데이터와 자리를 바꾸는 식으로 반복 비교하는 정렬 방법입니다. 선택 정렬은 데이터의 개수가 n개이면 전체 회전수는 n-1회 입니다. 선택 정렬 알고리즘은 오름차순 기준으로 배열의 처음부터 가장 작은 데이터가 채워집니다.

### 1.1.3 선택정렬 회전수
배열 data[5]에 다음과 같이 데이터가 입력되어 있다고 할 때 선택 정렬을 사용해야 오름차순으로 정렬시키는 단계를 간단히 표현해 보겠습니다. 지면상 모든 단계를 표현하는게 아닌 왼쪽에 가장 작은 값이 들었을 때 까지만 표현 하겠습니다.

* 3 2 1 5 4
    + Pass 1: 1 3 2 5 4
    + Pass 2: 1 2 3 5 4
    + Pass 3: 1 2 3 5 4
    + Pass 4: 1 2 3 4 5


## 2.1 검색(SEARCH) 알고리즘

### 2.1.1. 검색(SEARCH) 알고리즘
검색 알고리즘은 배열 등의 데이터에서 특정 값을 검색하는 알고리즘입니다. 일반적으로 순차 검색과 이진 검색등으로 구분할 수 있습니다.

* 순차 검색: 전체 데이터를 처음부터 끝까지 순서대로 검색합니다.
* 이진 검색: 정렬되어 있는 데이터를 절반으로 나눠서 검색합니다.

### 2.1.2 이진 검색(Binary Search) 알고리즘
이진 검색 알고리즘은 주어진 데이터가 오름차순으로 정렬되어 있다고 가정합니다. 만약, 실제 데이터가 정렬되어 있지 않다면, 정렬 알고리즘 등을 이용하여 정렬한 다음에 이진 검색 알고리즘 로직을 적용해야 합니다. 이진 검색 알고리즘은 영어로 Divide and Conquer(나누기 및 정복) 알고리즘으로 표현하는데 그 의미 그대로 데이터를 절반으로 나눠서 검색하여 순차 검색보다 효율을 높입니다.

1차원 배열에 1, 3, 5, 7, 9 의 데이터가 있을 경우 이진 검색을 사용하면 중간 인덱스 값을 찾는 것이 핵심 로직 입니다.
중간 인덱스를 mid 로 놓고 low 인덱스는 0, high 인덱스는 4로 본 후 각 회전마다 중간 인덱스를 구하고 중간 인덱스의 값이 찾으려는 데이터인지 확인하면 됩니다.
* 찾으려는 값이 더 크면 mid+1 을 low로 설정 후 다시 확인
* 찾으려는 값이 더 작으면 mid-1 을 high로 설정 후 다시 확인

* EX) 1 3 5 7 9 에서 9 찾기
    + Pass 1: 1 3 5 7 9     // mid = (0+4) / 2 = 2
    + Pass 2:       7 9     // mid = (3+4) / 2 = 3
    + Pass 3:         9     // mid = (4+4) / 2 = 4

