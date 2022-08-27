# DataStructure Master



## 1. 프로젝트의 목적 및 용도

### 이 프로젝트는 무엇을 위한 것인가
'Datastructure Master'는 컴퓨터공학 전공자와 비전공자를 포함한 자료구조를 학습하고자 하는 학생들의 자료구조에 대한 이해 능력을 증진하기 위한 프로젝트임
'Datastructure Master' 프로젝트를 통해 자료구조의 정의, 개념과 같은 기초 지식을 쌓고, 그 지식을 프로그래밍 언어로 구현함으로써 자료구조 학습을 단계적으로 진행할 수 있도록 도움을 줌
또한 'Datastructure Master' 프로젝트는 정의, 개념, 구현을 한 페이지에 제공함으로써 자료구조 지식에 관한 접근 용이성을 편리하게 함

### 어떤 문제를 해결할 수 있는가?
자료구조의 올바른 정의와 개념을 정립함
자료구조의 구현 방법 및 활용 방법을 정립함
자료구조를 각종 프로그래밍 언어로 구현해봄으로써 프로그래밍 실력 향상에 기여함
다양한 예제 문제를 통해서 자료구조에 대한 이해도를 자각함
프로그래밍의 기반이 되는 자료구조를 학습함으로써 컴퓨터 과학에서 효율적인 접근 및 수정을 가능케 하는 자료의 조직, 관리, 저장 가능

### 왜 이 프로젝트가 유용한가
알기 쉬운 UI, 링크를 모아둠으로써 접근성 향상
유튜브 미디어 시각 자료를 활용함으로써 이해 증진 활용에 효과적 

### 어떤 사람들이 이 프로젝트를 사용하면 좋은가
컴퓨터 과학을 전공하는 전공자
프로그래밍 언어를 독학하고자 하는 비전공자
자료구조에 대한 기초 지식을 쌓아 지식 기반을 탄탄히 하고자 하는 학생

## 2. 프로그램 구동 환경

### 실행 방법
Windows

### 개발 환경
vscode와 같은 ide 통합개발환경

### 브라우저 서포트 
Chrome, Safari, Microsoft Edge

### 프로그램을 사용하기 위해 설치해야 할 것
github 계정 및 repository
git bash (관리자 권한으로 실행)
github 계정에 맞춰 git bash 세팅 (설치 가이드 문서 : https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95 참고)
ide 통합개발환경

### Contributor를 위한 안내서
- 웹 기본 설명
이 프로젝트의 자료구조는 크게 단순구조, 선형 구조, 비선형 구조로 나뉨
사이트의 큰 목차도 위와 같은 3가지로 설계함
Datastructure-master는 각각의 자료구조를 쉽게 학습하고 응용할 수 있도록 다양한 참고 자료와 예제들로 구성함
자료는 wiki의 문서, youtube 영상 등으로 구성하였고 예제는 백준, 프로그래머스 등의 online-judge 사이트에서 엄선함 (자세한 링크는 '3. 저작권' 참고)

- Contributing 규칙
DataStructure-Master Github URL : https://github.com/threelee/DataStructure-Master.git
주된 규칙은 DataStructure-Master Github의 issue 탭 확인 (branch 구조, branch 네이밍 규칙 등)
gitmessage의 경우 `.gitmessage` 파일 확인
ide 통합개발환경을 설치해서 html 문서의 텍스트를 변경하거나 다른 자료들을 기재하거나 css를 변경함으로써 프로젝트를 변경

### Contributor를 위한 명령어 가이드
#### 1. 정해진 브랜치 형식에 맞게 브랜치를 생성
```
$ git branch feat/`이슈번호`/`목차이름` 
```
- ex) git branch feat/#6/문자
#### 2. 브랜치 목록 확인
```
$ git branch // 현재 로컬의 브랜치의 목록 출력 
or
$ git branch -r // 원격 레포지토리의 브랜치 목록 출력
```
#### 3. 브랜치 변경
```
$ git checkout feat/`이슈번호`/`목차이름`
or
$ git switch feat/`이슈번호`/`목차이름`
```
checkout과 switch은 둘 다 브랜치를 변경하는데 사용되지만 
 - checkout은 완료된 작업의 커밋 대상 지정에 중점
 - switch 분기 간의 개발 및 전환에 중점

#### 4. 스테이징, 커밋, 푸쉬
##### 스테이징
```
$ git status // 파일 상태 확인 
```
##### 커밋
```
$ git add feat/`이슈번호`/`기능이름`  // Stage Area에 추가
$ git commit -m `메세지`              // Stage Area에 추가된 파일들을 Commit 
```
- add가 필요한 이유 : Working Directory에 있는 파일을 Stage Area에 추가하기 위하여
- commit의 의미 : Stage Area에 있는 파일들을 로컬 Repository에 적용
##### 푸쉬
```
$ git push origin feat/`이슈번호`/`문자` // 로컬 Repository의 파일들을 원격 저장소에 적용
```
#### 5. Pull Requests 
##### 의미 : 작업한 코드가 있으니 이 코드를 검토 후 병합을 요청
##### 필요한 이유 : 
 - 오픈 소스 프로젝트에 기여할 때
 - 다른 사람의 프로젝트를 사용할 때
 - 협업 시 다른 사람들의 코드 리뷰를 위해
##### 장점 :
 - Merge 전에 코드를 확인하고 각 코드별로 코멘트를 작성 가능
 - 코드 안정성을 높임
##### 사용방법 :
- 다른 사람의 레포지토리를 Fork하고 자신의 로컬에 Clone 후 수정
- 브랜치를 생성하고 add, commit, push 명령어 실행
- Pull Reqeust 작성
- 레포지토리의 주인은 요청받은 수정본이 문제가 없으면 Merge

## 3. 저작권
- 단순구조 저작권

[문서]
정수의 정의, 성질, "https://ko.wikipedia.org/wiki/%EC%A0%95%EC%88%98"
기술용어 해설, "http://www.ktword.co.kr/test/view/view.php?nav=2&no=4772&sh=%EC%8B%A4%EC%88%98"
개념설명 블로그, "https://gusdnd852.tistory.com/164"
Wiki, "https://ko.wikipedia.org/wiki/Char"
Wiki, "https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%9E%90%EC%97%B4"

[강의]
정수의 음수 표현 방식, "https://www.youtube.com/watch?v=Q1JQJp-X0S8"
정수의 양수 표현 방식, "https://www.youtube.com/watch?v=P6s_66Ta72s"
실수표현-고정 소수점, 부동 소수점, IEEE 754 표준, "https://www.youtube.com/watch?v=g_S24b9Q2_8"
자바로 풀어낸 char, "https://www.youtube.com/watch?v=Mi0G-RbZmcE"
C언어로 풀어낸 char, "https://www.youtube.com/watch?v=En04HF7OPik"
대학교 자료구조 문자열 강의, "https://www.youtube.com/watch?v=mLl6EUszOOA"
C언어로 풀어낸 문자열, "https://www.youtube.com/watch?v=HYQeL41_hsY"

[예제]
합이 0인 네 정수를 구하는 예제, "https://www.acmicpc.net/problem/7453"
문자열 S에 포함된 정수의 개수를 구하는 예제, "https://www.acmicpc.net/problem/10821"
정수 삼각형의 합을 구하는 예제, "https://www.acmicpc.net/problem/1932"
구조체를 이용한 실수 계산 예제, "https://www.acmicpc.net/problem/9411"
부분 문자열을 이용한 실수 계산 예제, "https://www.acmicpc.net/problem/13123"
주어진 수학 공식을 이용한 실수 계산 예제, "https://www.acmicpc.net/problem/24057"
특정 위치에 있는 문자를 찾는 예제, "https://www.acmicpc.net/problem/10809"
특정 규칙에 따라 문자열을 반복하는 예제, "https://www.acmicpc.net/problem/2675"


- 선형구조 저작권

[문서]
순차리스트 정의, 장단점, 활용, "https://doubleflavor.github.io/2021/01/13/ys-DS-Array/"
자바로 단일 연결리스트 구현하기, "https://galid1.tistory.com/92"
C언어로 단일 연결리스트 구현하기, " https://happysalmon.tistory.com/74"
이중 연결리스트 개념설명, "https://opentutorials.org/module/1335/8940"
이중 연결리스트 구현, "https://velog.io/@mmindoong/자료구조-이중-연결-리스트Doubly-Linked-List"
C++로 구현하는 원형 연결리스트, "https://codechacha.com/ko/circular-linked-list-in-cpp/"
원형 연결리스트 분석, "https://velog.io/@mmindoong/자료구조-원형-연결-리스트-Circular-Linked-List"
기술용어 해설, "http://www.ktword.co.kr/test/view/view.php?nav=2&no=1306&sh=%EC%8A%A4%ED%83%9D"
기술용어 해설, "http://www.ktword.co.kr/test/view/view.php?nav=2&no=443&sh=%ED%81%90"
덱의 정의, 특징, "http://www.ktword.co.kr/test/view/view.php?nav=2&no=5302&sh=%EB%8D%B0%ED%81%AC"

[강의]
순차자료구조의 정의, "https://youtu.be/iNVeQUWY7-s"
순차적 자료구조:배열과 리스트, "https://youtu.be/Lqd8o7vL2Z8"
C언어로 단일 연결리스트 구현하기, "https://www.youtube.com/watch?v=3ZdafcIvREw"
단일 연결리스트 분석, "https://www.youtube.com/watch?v=PtrlTt1hPJg"
이중 연결리스트 대학 강의, "https://www.youtube.com/watch?v=0FlCrw3B4mE"
C로 구현하는 이중 연결리스트, "https://www.youtube.com/watch?v=iSdEHxVJ5vk"
C로 풀어낸 원형 연결리스트, "https://www.youtube.com/watch?v=FAvrRwjR27A"
원형 연결리스트 분석 및 구현, "https://www.youtube.com/watch?v=2nHClCA-9tw"
스택 자료구조 5분만에 이해하기, "https://youtu.be/DsZHDmth6Pc"
자료구조 스택과 그 응용, "https://youtu.be/D5k4wem7GQo"
큐 자료구조 5분만에 이해하기, "https://youtu.be/BdsyG5yP1cQ"
놀라운 스택과 큐의 차이, "https://youtu.be/OeCdHoJa-X0"
덱의 개념, 정의, "https://www.youtube.com/watch?v=gGTCudmhpKc&feature=youtu.be"

[예제]
올바른 배열을 만드는 예제, "https://www.acmicpc.net/problem/1337"
문자열로 배열을 만드는 예제, "https://www.acmicpc.net/problem/14253"
배열 요소 중 최대값과 최소값을 찾는 예제, "https://www.acmicpc.net/problem/10818"
연결리스트를 활용해 특정 규칙의 에디터를 구현하는 예제, "https://www.youtube.com/watch?v=PtrlTt1hPJg"
이중 연결리스트의 연산 횟수를 구하는 예제, "https://www.acmicpc.net/problem/3045"
원형 리스트 연산 결과를 예측하는 예제, "https://euleroj.io/problemset/viewer/3169"
pop, push 수행을 계산하는 스택 예제, "https://www.acmicpc.net/problem/1874"
입력으로 명령을 저리하는 스택 예제, "https://www.acmicpc.net/problem/10828"
정해진 기호로 게산하여 결과를 출력하는 스택 예제, "https://www.acmicpc.net/problem/3425"
회전하는 큐 예제, "https://www.acmicpc.net/problem/1021"
큐 정렬 예제, "https://www.acmicpc.net/problem/4931"
이중 우선순위 큐 예제, "https://www.acmicpc.net/problem/7662"
덱을 구현하여 프로그램을 처리하는 예제, "https://www.acmicpc.net/problemset?search=%EB%8D%B1"
덱을 구현하여 요소를 오름차순으로 정리하는 예제, "https://www.acmicpc.net/problemset?search=%EB%8D%B0%ED%81%AC"


- 비선형구조 저작권

[문서]
트리 정의, 구조, "https://kingpodo.tistory.com/26?category=805745"
이진트리의 정의, 특징, 종류, "https://kingpodo.tistory.com/27"
이진트리 순회 방식, "https://kingpodo.tistory.com/28?category=805745"
기술용어 해설, "http://www.ktword.co.kr/test/view/view.php?nav=2&no=4843&sh=%EB%B0%A9%ED%96%A5%EA%B7%B8%EB%9E%98%ED%94%84"

[강의]
트리 자료구조 10분 요약, "https://youtu.be/i5yHkP1jQmo"
이진트리의 구현과 순회 알고리즘, "https://youtu.be/z_tzHoPfllA"
방향 그래프, "https://www.youtube.com/watch?v=7SCXueORDHw"
방향 그래프 개요, "https://www.youtube.com/watch?v=ZjJoXjz3nvk"
Detect Cycle in Undirected Graph, "https://www.youtube.com/watch?v=vXrv3kruvwE"
Graph Types Directed and Undirected Graph, "https://www.youtube.com/watch?v=amaH38_mXK4"

[예제]
트리의 부모를 찾는 예제, "https://www.acmicpc.net/problem/11725"
주어진 그래프가 트리인지 판별하는 예제, "https://www.acmicpc.net/problem/4803"
트리 순회 순서를 구하는 예제, "https://www.acmicpc.net/problem/2263"
이진트리를 순회하는 예제, "https://www.acmicpc.net/problem/1991"
이진 검색 트리의 전위 순회가 주어졌을 때 후위 순회를 구하는 예제, "https://www.acmicpc.net/problem/5639"],
완전 이진트리의 부분 집합을 찾는 예제, "https://www.acmicpc.net/problem/1634"
가중치 방향 그래프 예제, "https://u-u002.tistory.com/141"
방향 그래프에서 사이클 찾기 예제, "https://hongl.tistory.com/60"
무방향 그래프 예제, "https://kr.mathworks.com/help/matlab/math/directed-and-undirected-graphs.html"
무방향 그래프 구현 예제, "https://jackpot53.tistory.com/79"