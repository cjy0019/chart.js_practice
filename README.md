![vuejs](https://miro.medium.com/max/1200/1*4GUGenZxW7rTXWmxcrEo6g.png)

# chart-lib

chart.js 라이브러리 모듈화 연습용 레포지토리입니다.

## TODO

1. npm install chart.js
2. 설치된 라이브러리를 import로 App.vue에서 로드하기
3. mounted() 라이프 사이클 훅에서 차트 생성
4. 차트를 컴포넌트화
5. 컴포넌트의 플러그인화
6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합

## 정리

컴포넌트마다 import로 전체 라이브러리를 불러오는 것은 성능상 좋지 않다.</br>
vue 전용 라이브러리가 아니라 일반 라이브러리들을 모듈화해서 사용할 수 있다.
