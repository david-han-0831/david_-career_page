# 개인 포트폴리오 웹사이트

애플 스타일의 미니멀한 디자인을 적용한 개인 포트폴리오 웹사이트입니다. Next.js App Router를 기반으로 제작되었으며, 웹/앱 풀스택 개발자로서의 역량과 경험을 소개합니다.

## 🚀 주요 기능

- **반응형 디자인**: PC, 태블릿, 모바일에 최적화된 레이아웃
- **다크 모드 지원**: 시스템 설정에 따른 자동 테마 전환
- **실시간 폼 검증**: 사용자 입력에 대한 즉각적인 피드백
- **부드러운 스크롤 효과**: Framer Motion을 활용한 섹션 전환
- **최적화된 이미지 로딩**: Next.js Image 컴포넌트 활용

## 🛠️ 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS, Stylus
- **UI 컴포넌트**: shadcn/ui
- **상태 관리**: Zustand
- **폼 관리**: React Hook Form
- **애니메이션**: Framer Motion
- **배포**: Vercel

## 🎨 디자인 시스템

### 색상 팔레트
- **메인 색상**:
  - 배경색: 화이트 (#FFFFFF), 오프화이트 (#F9F9FB)
  - 주요 요소: 소프트 블루 (#5E8EEB)
  - 악센트 색상: 라이트 코럴 (#FF7F7F)
- **뉴트럴 컬러**:
  - 라이트 그레이: #F0F2F5
  - 미디엄 그레이: #E5E7EB
  - 다크 그레이: #6B7280
- **텍스트 컬러**:
  - 주요 텍스트: #3A3A3C
  - 부제목/보조 텍스트: #6B7280
- **강조 색상**:
  - 소프트 터콰이즈: #64D2FF
  - 라이트 코럴: #FF7F7F
  - 민트 그린: #5ECCA9

### 타이포그래피
- **폰트**: Geist (Sans, Mono)
- **크기**: 
  - 타이틀: 40-56px
  - 서브타이틀: 28-32px
  - 본문: 16px

## 🚦 시작하기

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn start
```

## 📱 화면 구성

1. **Hero 섹션**: 개발자 소개 및 주요 CTA
2. **Skill Set**: 기술 스택 소개
3. **Experiences**: 경력 및 프로젝트 경험
4. **Portfolio**: 주요 프로젝트 갤러리
5. **Contact**: 연락처 및 문의 폼

## 🔧 환경 설정

`.env.local` 파일에 필요한 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
```

## 📝 라이선스

MIT License - 자유롭게 사용하실 수 있습니다.

## 👨‍💻 개발자 정보

- GitHub: [your-github-username](https://github.com/your-github-username)
- Instagram: [@your-instagram](https://instagram.com/your-instagram)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)
