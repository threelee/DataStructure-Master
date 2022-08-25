export const linearStructure = {
	name: "linearStructure",
	areas: [
		{
			name: "순차리스트",
			skills: [


				{
					name: "순차리스트",
					description: {
						text: "순차리스트 (Sequential List) : 구현할 자료들을 논리적인 순서대로 메모리에 연속 저장하는 자료구조",
						links: [
							["[문서] 순차리스트 정의, 장단점, 활용", "https://doubleflavor.github.io/2021/01/13/ys-DS-Array/"],
							["[강의] 순차자료구조의 정의", "https://youtu.be/iNVeQUWY7-s"],
							["[강의] 순차적 자료구조:배열과 리스트", "https://youtu.be/Lqd8o7vL2Z8"],
							["[예제] 올바른 배열을 만드는 예제", "https://www.acmicpc.net/problem/1337"],
							["[예제] 문자열로 배열을 만드는 예제", "https://www.acmicpc.net/problem/14253"],
							["[예제] 배열 요소 중 최대값과 최소값을 찾는 예제", "https://www.acmicpc.net/problem/10818"],
						]
					}
				},
			
			]
		},
		{
			name: "연결리스트",
			skills: [

				{
					name: "연결리스트",
					description: {
						text: "연결리스트 (linked list) : 각 노드가 데이터와 포인터를 가지고 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조",
					},

					skills: [
						{
							name: "단순연결리스트",
							description: {
								text: "단순연결리스트 (Singly Linked List) : 각 노드에 자료 공간과 한 개의 포인터 공간이 있고, 각 노드의 포인터는 다음 노드를 가리키는 자료구조",
								links: [
									["[문서] 자바로 단일 연결리스트 구현하기", "https://galid1.tistory.com/92"],
									["[문서] C언어로 단일 연결리스트 구현하기", " https://happysalmon.tistory.com/74"],
									["[강의] C언어로 단일 연결리스트 구현하기", "https://www.youtube.com/watch?v=3ZdafcIvREw"],
									["[강의] 단일 연결리스트 분석", "https://www.youtube.com/watch?v=PtrlTt1hPJg"],
									["[예제] 연결리스트를 활용해 특정 규칙의 에디터를 구현하는 예제", "https://www.youtube.com/watch?v=PtrlTt1hPJg"],
									]}
						},
						{
							name: "이중연결리스트",
							description: {
								text: "이중연결리스트 (Doubly linked list) : 단일 연결 리스트와 비슷하지만, 포인터 공간이 두 개가 있고 각각의 포인터는 앞의 노드와 뒤의 노드를 가리키는 자료구조",
								links: [
									["[문서] 이중 연결리스트 개념설명", "https://opentutorials.org/module/1335/8940"],
									["[문서] 이중 연결리스트 구현", "https://velog.io/@mmindoong/자료구조-이중-연결-리스트Doubly-Linked-List"],
									["[강의] 이중 연결리스트 대학 강의 ", "https://www.youtube.com/watch?v=0FlCrw3B4mE"],
									["[강의] C로 구현하는 이중 연결리스트", "https://www.youtube.com/watch?v=iSdEHxVJ5vk"],
									["[예제] 이중 연결리스트의 연산 횟수를 구하는 예제", "https://www.acmicpc.net/problem/3045"],]}
						},
						{
							name: "원형연결리스트",
							description: {
								text: "원형연결리스트 (Circular Linked List) : 일반적인 연결 리스트에 마지막 노드와 처음 노드를 연결시켜 원형으로 만든 자료구조",
								links: [
									["[문서] C++로 구현하는 원형 연결리스트", "https://codechacha.com/ko/circular-linked-list-in-cpp/"],
									["[문서] 원형 연결리스트 분석", "https://velog.io/@mmindoong/자료구조-원형-연결-리스트-Circular-Linked-List"],
									["[강의] C로 풀어낸 원형 연결리스트", "https://www.youtube.com/watch?v=FAvrRwjR27A"],
									["[강의] 원형 연결리스트 분석 및 구현", "https://www.youtube.com/watch?v=2nHClCA-9tw"],
									["[예제] 원형 리스트 연산 결과를 예측하는 예제", "https://euleroj.io/problemset/viewer/3169"],]}
						},
					]
				},

				
			
			]
		},
		{
			name: "스택",
			skills: [

				

				{
					name: "스택",
					description: {
						text: "스택 (Stack) : 차곡차곡 쌓아둔 모양/형태를 의미"
							 +"			      후입선출(LIFO) 리스트를 말함",
						links: [
							["[문서] 기술용어 해설", "http://www.ktword.co.kr/test/view/view.php?nav=2&no=1306&sh=%EC%8A%A4%ED%83%9D"],
							["[강의] 스택 자료구조 5분만에 이해하기", "https://youtu.be/DsZHDmth6Pc"],
							["[강의] 자료구조 스택과 그 응용", "https://youtu.be/D5k4wem7GQo"],
							["[예제] pop, push 수행을 계산하는 스택 예제", "https://www.acmicpc.net/problem/1874"],
							["[예제] 입력으로 명령을 저리하는 스택 예제", "https://www.acmicpc.net/problem/10828"],
							["[예제] 정해진 기호로 게산하여 결과를 출력하는 스택 예제", "https://www.acmicpc.net/problem/3425"],
						]
					}
				},
			
			]
		},
		{
			name: "큐",
			skills: [

				

				{
					name: "큐",
					description: {
						text: "큐 (Queue) : 한쪽 끝에서 삽입되고, 다른 한쪽 끝으로 삭제되는 리스트 구조의 일종",
						links: [
							["[문서] 기술용어 해설", "http://www.ktword.co.kr/test/view/view.php?nav=2&no=443&sh=%ED%81%90"],
							["[강의] 큐 자료구조 5분만에 이해하기", "https://youtu.be/BdsyG5yP1cQ"],
							["[강의] 놀라운 스택과 큐의 차이", "https://youtu.be/OeCdHoJa-X0"],
							["[예제] 회전하는 큐 예제", "https://www.acmicpc.net/problem/1021"],
							["[예제] 큐 정렬 예제", "https://www.acmicpc.net/problem/4931"],
							["[예제] 이중 우선순위 큐 예제", "https://www.acmicpc.net/problem/7662"],
						]
					}
				},
			
			]
		},
		{
			name: "덱",
			skills: [


				{
					name: "덱",
					description: {
						text: "덱 (Deque) : 스택, 큐가 함께 결합된 선형 자료구조",
						links: [
							["[문서] 덱의 정의, 특징", "http://www.ktword.co.kr/test/view/view.php?nav=2&no=5302&sh=%EB%8D%B0%ED%81%AC"],
							["[강의] 덱의 개념, 정의", "https://www.youtube.com/watch?v=gGTCudmhpKc&feature=youtu.be"],
							["[예제] 덱을 구현하여 프로그램을 처리하는 예제", "https://www.acmicpc.net/problemset?search=%EB%8D%B1"],
							["[예제] 덱을 구현하여 요소를 오름차순으로 정리하는 예제", "https://www.acmicpc.net/problemset?search=%EB%8D%B0%ED%81%AC"],
						]
					}
				},
			
			]
		},
	]
}