# Next.js 학습 예제

Next.js를 기초부터 공부하며 학습 내용과 실습 코드를 기록하는 저장소입니다. 현재는 학습을 시작하는 단계이며, 앞으로 공부하는 개념과 예제를 차근차근 추가할 예정입니다.

각 실습 폴더는 독립적인 프로젝트입니다. **저장소 최상위가 아니라, 실행하려는 예제의 `package.json`이 있는 폴더에서 설치와 실행 명령어를 입력합니다.**

## 사용 기술

| 기술 | 버전 | 역할 |
| --- | --- | --- |
| Next.js | 16.3.1 | React를 기반으로 페이지, 경로, 서버 렌더링 등을 제공하는 프레임워크 |
| React / React DOM | 19.2.8 | 화면을 컴포넌트로 나누고 사용자 입력에 따라 갱신하는 라이브러리 |
| TypeScript | 예제별 상이 | 변수와 함수에 타입을 지정하여 코드 오류를 발견하도록 돕는 언어 |
| ESLint | 9 계열 | 코드에서 문제가 될 수 있는 패턴을 검사하는 도구 |
| Tailwind CSS | 4 계열 | 미리 정의된 클래스로 CSS 스타일을 작성하는 도구 |

Next.js와 React 버전은 각 예제의 `package-lock.json`을 기준으로 작성했습니다. `SECTION02/02-01`의 TypeScript는 7.0.2이며, 나머지 프로젝트는 `package.json`에서 5 계열을 사용합니다.

ESLint와 Tailwind CSS 관련 설정은 `SECTION02/02-01`을 제외한 프로젝트에 포함되어 있습니다. 현재 예제 페이지에는 Tailwind CSS를 불러오는 전역 CSS 파일이 연결되어 있지 않습니다.

## 실행 방법

### 1. Node.js와 npm 확인

[Node.js](https://nodejs.org/)의 지원 중인 LTS 버전을 설치합니다. 이 저장소에서 사용하는 Next.js의 최소 요구 버전은 **Node.js 20.9.0**입니다. npm은 Node.js 설치 시 함께 제공되는 패키지 관리 도구입니다.

터미널에서 다음 명령어로 설치 여부를 확인합니다.

```bash
node -v
npm -v
```

### 2. 예제 폴더로 이동하고 의존성 설치

터미널의 현재 위치가 저장소 최상위인 `next_lecture`라고 가정합니다. 처음에는 페이지와 레이아웃의 관계를 볼 수 있는 `SECTION02/02-01`부터 실행하면 좋습니다.

```bash
cd SECTION02/02-01
npm ci
```

- `cd`는 터미널의 작업 폴더를 바꾸는 명령어입니다.
- `npm ci`는 `package-lock.json`에 기록된 버전대로 필요한 패키지를 설치합니다. 기존 `node_modules`가 있으면 다시 설치합니다.
- 설치한 패키지는 해당 예제의 `node_modules` 폴더에 저장됩니다. 다른 예제를 실행할 때도 그 폴더에서 별도로 설치해야 합니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다. 다른 포트로 실행되었다면 터미널에 표시된 주소를 사용합니다.

`app/page.tsx`의 문구를 바꾸고 저장하면 실행 중인 화면에 변경 사항이 반영됩니다. 개발 서버를 종료하려면 터미널에서 `Ctrl + C`를 누릅니다.

카운터 예제로 이동하려면 서버를 종료한 뒤 다음 명령어를 실행합니다. 아래 경로는 현재 위치가 `SECTION02/02-01`일 때를 기준으로 합니다.

```bash
cd ../../SECTION03/03-01
npm ci
npm run dev
```

### 4. 사용 가능한 명령어

| 명령어 | 설명 | 지원하는 프로젝트 |
| --- | --- | --- |
| `npm ci` | 잠금 파일에 기록된 의존성 설치 | `package.json`이 있는 모든 예제 |
| `npm run dev` | 수정 내용을 확인하는 개발 서버 실행 | `package.json`이 있는 모든 예제 |
| `npm run build` | 배포에 사용할 빌드 결과물 생성 | `SECTION02/02-01`을 제외한 실행용 프로젝트 |
| `npm start` | 빌드 결과물로 프로덕션 서버 실행 | `SECTION02/02-01`을 제외한 실행용 프로젝트 |
| `npm run lint` | ESLint로 코드 검사 | `SECTION02/02-01`을 제외한 실행용 프로젝트 |

프로덕션 실행을 확인할 때는 지원하는 프로젝트 폴더에서 다음 순서로 실행합니다.

```bash
npm run build
npm start
```

`SECTION01/01-01`에는 `package.json`이 없으며, `SECTION02/02-01`에는 `dev` 스크립트만 등록되어 있습니다.

## 코드를 읽기 위한 기본 개념

### 컴포넌트와 TSX

컴포넌트는 화면의 한 부분을 만드는 함수입니다. 예를 들어 `Page` 함수가 반환하는 `<h1>Page</h1>`은 브라우저에 제목으로 표시됩니다. 여러 컴포넌트를 조합하면 페이지 전체를 만들 수 있습니다.

`.tsx`는 TypeScript 코드 안에 JSX라는 화면 표현 문법을 사용할 수 있는 파일 확장자입니다. JSX는 HTML과 비슷하게 생겼지만, `{count}`처럼 JavaScript 값을 화면에 넣을 수 있습니다.

### App Router, page.tsx, layout.tsx

이 저장소는 폴더와 파일의 위치로 페이지 경로를 정하는 **App Router**를 사용합니다.

- `app/page.tsx` 또는 `src/app/page.tsx`: 기본 경로 `/`에서 보여 줄 화면입니다.
- `app/layout.tsx` 또는 `src/app/layout.tsx`: 페이지를 감싸는 공통 구조입니다. 루트 레이아웃에는 `<html>`과 `<body>`가 들어갑니다.
- `children`: 부모 컴포넌트가 감쌀 내부 내용입니다. 레이아웃에서는 해당 위치에 페이지 내용이나 하위 레이아웃이 들어갑니다.
- `metadata`: 브라우저 탭 제목이나 페이지 설명 같은 정보를 설정합니다. `SECTION02/02-01/app/layout.tsx`에서 예제를 볼 수 있습니다.

`SECTION02/02-01`의 화면은 다음 순서로 구성됩니다.

```text
RootLayout
├── Header
├── children → Page 컴포넌트의 내용
└── Footer
```

`app`과 `src/app`은 이 예제들에서 같은 역할을 합니다. `src`는 소스 코드를 설정 파일 등과 구분하여 모아 두는 폴더입니다.

### 서버 컴포넌트와 클라이언트 컴포넌트

App Router의 페이지와 레이아웃은 기본적으로 **서버 컴포넌트**입니다. 서버에서 실행되며, 서버에서 데이터를 읽고 화면을 구성하는 데 사용할 수 있습니다. 사용자 클릭에 반응하는 `onClick`이나 `useState`를 직접 사용하는 곳은 클라이언트 컴포넌트로 작성합니다.

**클라이언트 컴포넌트**는 파일 상단에 `"use client";`를 선언하여 클라이언트 영역의 시작점을 지정합니다. 해당 파일이 가져오는 컴포넌트와 모듈도 클라이언트 코드에 포함될 수 있습니다. 클라이언트 컴포넌트도 첫 화면을 위해 서버에서 HTML로 미리 렌더링될 수 있으며, 이후 브라우저에서 이벤트와 상태 변경을 처리합니다.

`SECTION03/03-01/src/app/page.tsx`의 카운터가 대표적인 예제입니다.

```tsx
const [count, setCount] = useState(0);
```

- `count`: 현재 화면에 표시할 상태 값이며, 처음 값은 `0`입니다.
- `setCount`: 상태를 바꾸는 함수입니다. 호출하면 React가 변경된 값을 화면에 반영합니다.
- `onClick`: 버튼을 클릭했을 때 실행할 함수를 연결하는 속성입니다.

### 헤더와 쿠키 읽기

`SECTION03/03-02/src/app/page.tsx`는 서버 컴포넌트에서 요청 정보를 읽습니다.

- **헤더**는 브라우저와 서버가 요청·응답에 함께 담는 추가 정보입니다. 예제의 `User-Agent`는 요청한 브라우저 등의 정보를 담습니다.
- **쿠키**는 브라우저가 보관하고 조건에 맞는 요청에 함께 보내는 작은 데이터입니다.
- `await headers()`와 `await cookies()`로 현재 요청의 정보를 가져옵니다. `await`는 비동기 작업의 결과가 준비될 때까지 기다리는 문법입니다.

이 예제는 쿠키를 읽어서 표시합니다. `name` 쿠키가 없으면 `No cookie found`가 표시되며, 요청에 쿠키가 없다면 전체 쿠키 목록도 비어 있습니다.

## 코드 스니펫

[SECTION01/01-01/snippets.json](./SECTION01/01-01/snippets.json)은 VS Code 형식의 코드 스니펫 모음입니다. 스니펫은 짧은 단축어로 자주 쓰는 코드 틀을 입력하는 기능입니다.

VS Code의 사용자 코드 조각 설정에서 `typescriptreact`용 스니펫에 필요한 항목을 추가하여 사용할 수 있습니다. 다른 편집기는 해당 편집기의 스니펫 또는 라이브 템플릿 형식에 맞게 등록해야 합니다.

| 단축어 | 생성하는 코드 |
| --- | --- |
| `nrlayout` | 루트 레이아웃 |
| `nlayout` | 일반 레이아웃 |
| `nfce` | 기본 함수 컴포넌트 |
| `ncfce` | 클라이언트 컴포넌트 |
| `nafce` | 비동기 함수 컴포넌트 |
| `npfce` | `params`를 받는 비동기 컴포넌트 |
| `nsfce` | `searchParams`를 받는 비동기 컴포넌트 |
| `npsfce` | `params`와 `searchParams`를 함께 받는 컴포넌트 |
| `ncpfce` | `useParams`를 사용하는 클라이언트 페이지 |

## 실행 중 자주 확인할 사항

- **`package.json`을 찾을 수 없는 경우**: 터미널의 현재 위치를 확인하고 실행하려는 예제 폴더로 이동합니다. 저장소 최상위에는 `package.json`이 없습니다.
- **`Missing script` 오류가 발생하는 경우**: 해당 예제의 `package.json`에 명령어가 등록되어 있는지 확인합니다. 특히 `SECTION02/02-01`에서는 `npm run dev`만 사용할 수 있습니다.
- **3000번 포트가 사용 중인 경우**: 실행 중인 개발 서버를 종료하거나 `npm run dev -- --port 3001`로 다른 포트를 지정합니다. 포트는 같은 컴퓨터에서 실행 중인 서버를 구분하는 번호입니다.
- **저장소 복제 후 일부 예제 폴더가 비어 있는 경우**: 현재 `SECTION02/02-02`, `SECTION03/03-02`, `default`는 상위 Git 저장소에 일반 파일이 아닌 별도 저장소의 커밋 참조로 기록되어 있고, 연결 주소를 정의하는 `.gitmodules`는 없습니다. 따라서 상위 저장소를 복제하는 것만으로는 해당 소스가 내려오지 않을 수 있습니다. 해당 예제를 실행하려면 원본 소스를 별도로 확보해야 합니다.

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [서버 컴포넌트와 클라이언트 컴포넌트](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [React 공식 문서 — 한국어](https://ko.react.dev/learn)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
