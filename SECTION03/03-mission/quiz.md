# 할 일 관리 앱 만들기 실습 가이드

## 🎯 학습 목표

React Server Components와 Client Components의 차이를 이해하고 적절히 활용할 수 있다.

- Server Component와 Client Component의 역할과 차이점 이해
- 각 컴포넌트 타입의 적절한 사용 시점 판단
- 'use client' 지시어의 필요성과 사용법
- 서버-클라이언트 컴포넌트 간 데이터 전달 방법

---

## 📋 제공 사항

### 1. 기본 코드 구조

모든 컴포넌트가 **Server Component**로 작성되어 있습니다.

```
app/
├── app/
│  ├── layout.tsx         # 공통(루트) 레이아웃
│  ├── page.tsx           # 메인 페이지 (할 일 목록)
├── components/
│   ├── html/
│   ├── ──  Button.tsx         # 버튼 UI
│   ├── ──  Checkbox.tsx       # 체크박스 UI
│   ├── ──  Input.tsx          # 체크박스 UI
│   ├── svg/
│   ├── ──  SvgClose.svg       # 엑스 아이콘
│   ├── ──  SvgPencil.svg      # 연필 아이콘
│   ├── TodoEditor.tsx         # 할 일 추가 폼
│   ├── TodoHeader.tsx         # 할 일 수정 폼
│   ├── TodoList.tsx           # 할 일 목록 컴포넌트
│   ├── TodoListItem.tsx       # 개별 할 일 아이템
│   └── TodoListItemEmpty.tsx  # 할 일 없을 때
├── assets/
    └── check.svg      # 체크 아이콘
└── styles/
    └── globals.css    # 글로벌 CSS
```

### 2. Todo 타입

```typescript
type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};
```

---

## 📝 과제 요구사항

### Step 1: 현재 코드 분석하기

**요구사항:**

- 제공된 기본 코드를 실행하고 구조 확인
- 각 컴포넌트가 Server Component로 작성되어 있음을 확인

---

### Step 2: 할 일 추가 기능 구현

**요구사항:**

- 할 일 제목을 입력하고 "추가" 버튼 클릭 시 새 할 일 생성
- 추가 후 입력 필드 초기화

**구현 고민 포인트:**

```typescript
// 이런 흐름을 고민해보세요

// 1. 어떤 컴포넌트를 Client Component로 만들어야 하는가?

// 2. Client Component로 만들려면?
"use client"; // 이 지시어를 어디에 추가?

// 3. 입력값을 어떻게 관리?
const [title, setTitle] = useState(""); // 이게 가능한가?

// 4. 폼 제출 시
const handleSubmit = async () => {
  // Server Action 호출
  // 입력 필드 초기화
};
```

---

### Step 3: 할 일 목록 구현

**요구사항:**

- 각 할 일 목록을 출력
- 새로고침해도 목록 유지 (localStorage 사용)

---

### Step 4: 할 일 삭제 기능 구현

**요구사항:**

- 각 할 일 아이템에 "삭제" 버튼
- 버튼 클릭 시 해당 할 일 삭제

**구현 고민 포인트:**

```typescript
// 방법 1: 전체 TodoItem을 Client Component로
"use client";
export function TodoItem({ todo }) {
  const handleDelete = () => {
    // deleteTodo 호출
  };
  return (
    <div>
      ... <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

// 방법 2: 삭제 버튼만 별도 Client Component로
// TodoItem.tsx (Server Component)
export function TodoItem({ todo }) {
  return (
    <div>
      ... <DeleteButton id={todo.id} />
    </div>
  );
}

// DeleteButton.tsx (Client Component)
("use client");
export function DeleteButton({ id }) {
  const handleDelete = () => {
    // deleteTodo 호출
  };
  return <button onClick={handleDelete}>삭제</button>;
}

// 어느 방법이 더 좋을까? 왜?
```

---

### Step 5: 할 일 수정 기능 구현

**요구사항:**

- 각 할 일 아이템에 "수정" 버튼
- 수정 버튼 클릭 시 수정 모드로 전환 (입력 필드 표시)
- 수정 완료 버튼 클릭 시:
  - 초기값과 수정한 값 비교
  - 값이 다르면 업데이트 함수 호출
  - 값이 같으면 수정 모드 해제만 수행

**구현 고민 포인트:**

```typescript
// 이런 흐름을 고민해보세요
// 코드의 구조는 같지 않을 수 있으니 흐름 아이디어만 참고하세요

// 1. 수정 모드 상태 관리
const [isEditing, setIsEditing] = useState(false);
const [editedTitle, setEditedTitle] = useState(todo.title);

// 2. 수정 버튼 클릭 시
const handleEdit = () => {
  // 수정 완료 - 초깃값과 비교 필요
  if (editedTitle !== "" && editedTitle !== todo.title) {
    // updateTodo 호출
  }
  // 수정 모드 진입
  setIsEditing(false);
  // 초깃값 저장
  setEditedTitle(...);
}

// 3. 조건부 렌더링
return (
  <div>
    {isEditing ? (
      <input value={editedTitle} onChange={...} />
    ) : (
      <span>{todo.title}</span>
    )}
    <button onClick={handleEdit}>
      {isEditing ? '완료' : '수정'}
    </button>
  </div>
)

// 4. 이 컴포넌트는 Server Component? Client Component?
```

---

### Step 6: 컴포넌트 구조 최적화

**요구사항:**

- 현재까지 구현한 코드 리뷰
- 불필요하게 Client Component로 만든 부분이 있는지 확인
- 가능한 한 많은 부분을 Server Component로 유지
