# 메이크텍

## 커밋 컨벤션 포맷

> <타입> : <작업 내용 요약>

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등), 기능 수정이 없는 경우
design: 사용자 UI 디자인 변경 (CSS 등)
test: 테스트 코드, 리팩토링 테스트 코드 추가
refactor: 코드 리팩토링
build: 빌드 파일 수정
ci: CI 설정 파일 수정
perf: 성능 개선
chore: 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등)
rename: 파일 혹은 폴더명을 수정만 한 경우
remove: 파일을 삭제만 한 경우
```

## 프로젝트 구조

```
MAKETECH-PR/
├─ .vscode/
│  └─ settings.json
├─ assets/                  # 정적 리소스
│  ├─ fonts/
│  ├─ images/
│  └─ videos/
├─ components/               # 재사용 컴포넌트 (jQuery로 로드)
│  ├─ floating-buttons.html
│  ├─ footer.html
│  ├─ header.html
│  ├─ pagination.html
│  ├─ pop_up.html
│  └─ top-menu.html
├─ css/
│  ├─ common.css             # 공통 스타일
│  └─ style.css              # 페이지별 커스텀 스타일
├─ flags/
├─ js/
│  ├─ jquery.js
│  ├─ main.js                # 메인 스크립트 (GSAP/ScrollTrigger 등)
│  └─ script.js
├─ node_modules/
├─ pages/                    # 서브 페이지 (현재 메인 페이지 1개만 작업 중이라 비어 있음)
├─ src/
│  ├─ input.css              # Tailwind 소스
│  └─ output.css             # Tailwind 빌드 결과물
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ index.html                # 메인 페이지
├─ package.json
├─ package-lock.json
└─ README.md
```

사용 스택
Markup/Style: Tailwind CSS(src/input.css → src/output.css) + 커스텀 CSS(common.css, style.css)
Component 로딩: jQuery
애니메이션: GSAP / ScrollTrigger
아이콘: Lucide
포맷팅: Prettier (+ Tailwind 플러그인)
