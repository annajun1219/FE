# POSTUREFIT
## ⚒️ TECH STACK
- node 18.17.0
- react 18
- zustand
- @tanstack/react-query
- tailwindcss

## 🏃🏻 GETTING STARTED
```bash
# installation
npm install

# run development-mode
npm run dev
```

## 📡 GIT CONVENTION
[참조: Git-git-커밋-컨벤션-설정하기](https://velog.io/@shin6403/Git-git-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

- [Feat] 새로운 기능 추가
- [Fix] 버그 수정
- [Docs] 문서 수정
- [Style] 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- [Refactor] 코드 리펙토링
- [Test] 테스트 코드, 리펙토링 테스트 코드 추가
- [Chore] 빌드 업무 수정, 패키지 매니저 수정

## 🗂️ FOLDER CONVENTION
[폴더 구조는 Next.js 표준을 지향하고 있습니다.](https://nextjs.org/docs)

### public
public 폴더에는 이미지, 동영상 등의 리소스를 보관합니다.

### app
routing을 담당합니다. routing 규칙은 next.js 표준을 따릅니다.

page.tsx는 해당 폴더 경로의 페이지를 의미합니다.
layout.tsx는 자식 노드를 감싸는 공통 컴포넌트를 정의합니다.

### asset
asset 폴더에는 정적인 파일을 보관합니다.

보통 json 파일을 보관합니다.

### components
JSX 문법으로 작성된 모듈을 보관합니다.
주로 UI를 요소를 보관합니다. 기본적으로 유지보수성을 위해 atomic-design-pattern을 지향합니다.

다만 FSD 아키텍처를 적극적으로 사용해야하는 상황이라면, 다른 `react-hook`이나 함수를 보관해도 무방합니다.

- [Atomic 디자인 패턴이란?](https://yozm.wishket.com/magazine/detail/1531/)
- [FSD 아키텍처란?](https://emewjin.github.io/feature-sliced-design/)


### interface
interface는 `interface`, `type`, type-guard 함수 등을 보관합니다.

구조에 대한 설계를 보관하는 폴더입니다.

### hook
hook 폴더에는 react-hook을 보관합니다.
react-hook은 반드시 함수명이 `use`로 시작해야합니다.

### util
util 폴더에는 유용한 유틸함수를 보관합니다.

## 👩🏻‍💻 CODE CONVENTION
꼭 지킬 필요는 없으나 지향하면 좋습니다.

### cn: classNames
tailwindcss를 모듈화하여 사용하고 싶어 제작한 함수입니다. styled-component에서 영감을 얻었습니다.

예시:

```javascript
import { cn } from "fast-jsx"
...
const container = {
	displays: "flex flex-col gap-y-3.5 justify-center items-center",
	sizes: "w-full min-h-screen",
	boundaries: "px-7.5",
};

return <div className={cn(container)}>{...}</div>
```