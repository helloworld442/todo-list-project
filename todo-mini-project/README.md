# 개인 프로젝트 (To-Do List)

## 기획

<img src = "https://i.ibb.co/vzStqPw/2023-08-04-5-40-06.png">
<img src = "https://i.ibb.co/74M3MCZ/2023-08-04-5-40-12.png">

- **제작 이유** : 현재 취업 시장에서 원하는 신입 개발자는 여러 언어를 다루는 것이 아닌 한 기술을 쓴 이유 , 성능을 얼마나 최적화 시켰는지 이다.
- **기술적 의사 결정의 필요성 :** 기술적 의사결정을 생각하지 않는 것은 그 기술을 사용할 때의 장단점과 그 기술을 사용하는 경우를 모르는 것이다.
- **최적화의 필요성 :** 최적화는 유저가 서비스를 이용할 때 느끼는 만족도와 연관이 깊은 주제다. UI / UX가 뛰어난 프로젝트라고 해도 성능이 최적화되지 않는다면 유저의 만족도는 낮을 것이다.

## 기술적 의사결정

| 사용 기술             | 기술 설명                                                                                                                                                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Styled-Components** | - CSS in JS라는 접근 방식으로 동적 스타일링이 가능해짐<br>- CSS in JS라는 접근 방식으로 재사용 컴포넌트를 만드는데에 유리함<br>- 각 요소에 고유의 클래스 이름 부여로 className으로 인한 스타일 충돌 문제를 효과적으로 방지                                              |
| **React-Query**       | - 서버 사이드 데이터만 다루기에 규격화 문제를 해결함<br>- 데이터를 cache , prefetch , stale등 여러 장치들을 통해서 유저의 만족도 , 성능 최적화 , 최신 데이터 업데이트 등이 가능함<br>- react-query에서 제공하는 여러가지의 훅을 통해서 보일러 플레이트을 해결할 수 있음 |
| **Recoil**            | - 클라이언트 사이드 데이터만 다루기에 규격화 문제를 해결함<br>- 다른 여러 라이브러리 보다 사용방법 , 환경설정 면에서 간단함<br>- Recoil에서 제공하는 여러가지의 훅을 통해서 보일러 플레이트를 해결할 수 있음                                                            |
| **Axois**             | - instance : 코드 가독성, 유지 보수에 큰 장점을 가짐<br>- interceptor : 토큰 처리, 에러 핸들링, 로그 관리 등 다양한 작업 수행에 유용                                                                                                                                    |

## 트러블 슈팅

<details>
<summary>Header 영역 컴포넌트의 확장성과 관련된 분리</summary>
<br/>

**`문제상황`**

- 내가 만들려고 하는 헤더의 영역을 캘린더 까지를 헤더로 볼 것인지 , 아님 제목 영역 까지로 봐야할 것인지에 대한 설계에서의 문제가 발생함

**`해결방법`**

- 문제상황을 가지고 크게 2가지 대안을 생각함
- 헤더 영역을 캘린더까지로 생각
- 헤더 영역을 제목까지로 생각

**`결과`**

- 코드가 길어진다고 해서 이 코드가 클린코드가 아니라고 생각하는 것은 잘못된 생각이다. 이유는 코드가 길어지면 내가 원하는 코드를 찾기 힘들고 유지보수 적인 측면에서 어려워진다는 생각. 하지만 나중에 확장성을 위해서는 단일 책임의 역할이 명확한 코드가 가능성이 높음.

</details>

<details>
<summary>DropBox 컴포넌트의 확장성과 관련된 분리</summary>
<br/>

**`문제상황`**

- 내가 만들려고 하는 드롭박스의 컴포넌트 분리를 어떻게 해야지 나중에 확장을 고려했을 때 확장성을 맞출 수 있는 구조로 설계할 지에 대한 고민이 있었음

**`해결방법`**

- 토스에서 컴포넌트 분리와 관련된 영상이 있어서 그 영상을 참고함. 대체적으로 컴포넌트를 분리할 때는 그 컴포넌트가 하나의 역할을 담당할 수 있도록 만듦. 즉 단일 책임의 원칙에 따라서 하나의 역할을 담당하는 컴포넌트로 분리하여 해당 문제를 해결함

**`결과`**

- 하나의 책임을 지는 컴포넌트로 분리했을 때 그 컴포넌트가 무슨 역할을 하는지를 한눈에 알 수 있으며 그 역할을 담당하는 컴포넌트만 수정하면 되므로 여러가지 상황에 대처할 수 있었음

</details>

<details>
<summary>Header 영역 불필요한 컴포넌트 제렌더링 이슈</summary>
<br/>

**`문제상황`**

- 헤더 영역는 크게 2가지로 나뉜다. 제목 영역 , 설명 영역 이렇게 2가지로 나뉜다. 여기서 문제는 설명영역에서 에니매이션 처리를 했는데 이 에니매이션 처리가 제목 영역까지 영향을 미친다는 것이다.
- 원인을 분석해보니 헤더의 제목 , 설명 영역을 감싸는 부모 영역이 있다면 이 부모영역에서 상태를 관리하고 있었고 이로 인해서 제목 , 설명 영역 모두가 영향을 받는 것이었다.

**`해결방법`**

- 부모 영역에서 관리하는 상태를 각각의 자식들에게 넘겨줌으로써 바뀔려고 하는 요소에게만 해당 변화를 일으켰다. 처음에는 React memo를 이용한 컴포넌트 캐싱을 진행했지만 나중에 Header 영역을 업데이트를 하는데 문제가 발생해서 확장성을 위해서 Header 영역안에 복합 컴포넌트로써 title , desc을 추가했다.

**`결과`**

해결 과정 노션 페이지 (https://broad-wishbone-2bb.notion.site/106a3bbae86243cab0c71b99d42b8715?pvs=4)

</details>

<details>
<summary>작성페이지 영역 불필요한 컴포넌트 제렌더링 이슈</summary>
<br/>

**`문제상황`**

- 작성 페이지에서 제목과 관련된 인풋 박스를 수정했는데 결과적으로는 모든 InputBox와 Select박스들이 바뀌는 현상을 목격할 수 있었음
- 원인을 분석해보니 props로 넘기는 함수에서 문제가 발생함 함수의 경우 참조 타입으로 안에 내용이 갔다고 해도 메모리에 똑같은 함수가 올라갔을 경우, 이는 shallow equerl 테스트에서 다른 부분으로 판단함

**`해결방법`**

- 위 상황으로 봤을 대 함수가 케싱되지 않고 매번 새로 만들어지기에 props로는 매번 새로운 값이 들어가게 됨. 따라서 함수를 캐싱해야 한다는 판단을 내림
- 함수를 캐싱하는 방법으로는 useCallback이라는 훅을 사용함. 이때 처음 화면에 렌더링 되었을 때 함수를 캐싱하고 다음 부터는 캐싱된 함수를 계속 써야 하기에 의존성 배열은 빈 배열로 만듦

**`결과`**

해결 과정 노션 페이지 (https://broad-wishbone-2bb.notion.site/106a3bbae86243cab0c71b99d42b8715?pvs=4)

</details>