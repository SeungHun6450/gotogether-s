<br/>

<div align="center"><a href="https://gotogether-s.vercel.app/" target="_blank" style="color: #939393"><img src="./public/main_logo.svg" width="300px"><p align="center" style="color: #939393">좋은 사람들과의 잊을 수 없는
여행</p></a></div>

<div align="center">

![last commit](https://img.shields.io/github/last-commit/gotogether-s/gotogether-s?color=green)
![most language](https://img.shields.io/github/languages/top/gotogether-s/gotogether-s)
[![release](https://img.shields.io/badge/release-v0.0.0-yellow)](https://github.com/gotogether-s/gotogether-s/tree/main)

</div>

<br/>

_🇰🇷 For Korean User: 스크롤다운을 하면 한국어로된 프로젝트 설명을 보실 수 있습니다._

# 🏝 고투게더 (한국어)

## 📑 목차

- [🚀 프로젝트 실행하기](#-프로젝트-실행하기)
- [🗓 프로젝트 제작기간](#-프로젝트-제작기간)
- [✨ 서비스 소개](#-서비스-소개)
  - [불편했던점](#-불편했던점)
  - [기업측 요구사항](#-기업측-요구사항)
- [👀 데모](#-데모)
  - [주요 페이지 목업](#주요-페이지-목업)
  - [목업 링크](#목업-링크)
  - [라이브 사이트 링크](#라이브-사이트-링크)
- [🪄 기술 스택](#-기술-스택)
  - [디자인](#-디자인)
  - [프론트앤드](#-프론트앤드)
  - [백앤드](#-백앤드)
- [✂️ 업무 분배](#-업무-분배)
  - [프론트앤드](#-프론트앤드)
  - [백앤드](#-백앤드)
- [⚙️ 주요 기능과 로직](#-주요-기능과-로직)

<br />

## 🚀 프로젝트 실행하기

#### .env

```
NEXT_PUBLIC_API_URL=https://gotogether24.tk
NEXT_PUBLIC_KAKAO_URL=81b8b8b3ffdd255436d5d0aa9d08b9c6
```

1. 리포 클론하기: `git clone https://github.com/gotogether-s/gotogether-s.git`
2. 해당 디렉토리로 이동하기: `cd <YOUR_PROJECT_NAME>`.
3. 패키지 설치하기: `yarn install`
4. 프로젝트 실행하기
   - 사용자 로컬호스트: `yarn run dev`
   - 빌드후 사용: `yarn build` then `yarn run dev`

<br />

## 🗓 프로젝트 제작기간

**버전 1**: 2022년 9월 6일 - 2023년 1월 13일

<br />

## ✨ 서비스 소개

고투게더는 시니어층을 주요 대상으로 패키지 여행 상품을 소개해주는 여행 서비스 플랫폼이다.

### 문제점

기존 [고투게더 웹사이트](https://www.gotogether-s.com/)는 아임웹이라는 CMS(Content Management System)로 웹사이트가 만들어져 있어 한정된 기능만 사용이 가능하다.

### 기업측 요구사항

1. 모바일 레이아웃을 기반으로 웹 페이지 리뉴얼
2. 사용자 특성에 맞는 패키지 여행 상품 추천 기능
3. 상품 등록이 가능한 관리자 페이지 제작

<br />

## 👀 데모

### 주요 페이지 목업

| 메인 페이지                                                                                                         | 카테고리: 전체                                                                                                         | 필터: 국가별                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![main-page](https://user-images.githubusercontent.com/83247825/212421968-f6733216-d59d-4af5-882d-2362b1320bab.png) | ![all-products](https://user-images.githubusercontent.com/83247825/212421756-11b75ce2-1190-4a8d-9451-bc7baceb283a.png) | ![filter-country](https://user-images.githubusercontent.com/83247825/212422605-f070f559-f425-417d-9e55-120104c270c8.png) |

| 상품상세                                                                                                                      | 예약하기                                                                                                               | 결제완료                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![product-detail-page](https://user-images.githubusercontent.com/83247825/212436972-5ef87c31-45c1-4501-91e9-9a8190ebecf5.png) | ![booking-page](https://user-images.githubusercontent.com/83247825/212437074-bdea2eb5-dbc7-417d-b0c4-3769fde0ff00.png) | ![payment-page](https://user-images.githubusercontent.com/83247825/212437171-95c33d6c-5d02-4122-8646-8e7e4b22b8ba.png) |

| 회원가입                                                                                                              | 로그인                                                                                                               | 설문조사                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![signup-page](https://user-images.githubusercontent.com/83247825/212437263-ab08f565-e645-4849-b2a1-127c88e504c3.png) | ![login-page](https://user-images.githubusercontent.com/83247825/212437353-2bb3a43d-0ec8-4c80-864a-3fd0cdeb2329.png) | ![survey-page](https://user-images.githubusercontent.com/83247825/212437468-391b1b79-745b-4e85-a553-5cd51b0ae1e4.png) |

| 상품검색                                                                                                                      | 찜한 상품                                                                                                            | 예약한 상품                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![product-search-page](https://user-images.githubusercontent.com/83247825/212437542-93d9fa4e-9730-48b3-9c91-24ba1fe42b9d.png) | ![likes-page](https://user-images.githubusercontent.com/83247825/212437611-70682fe4-6831-411d-a9d1-9647c7656ace.png) | ![mybooking-page](https://user-images.githubusercontent.com/83247825/212437741-6c4036fc-7b87-47ce-a7a5-e143e8744164.png) |

### 목업 링크

🔗 [Adobe XD에서 목업 보러가기](https://xd.adobe.com/view/b526d4f5-cd7d-453b-9e76-3963a51256c9-e075/grid/)

### 라이브 사이트 링크

🔗 [Vercel로 배포한 라이브 사이트 보러가기](https://gotogether-s.vercel.app/)

<br />

## 🪄 기술 스택

#### 디자인

- **와이어프레임, 목업 제작**: Adobe XD

#### 프론트앤드

🔗  프론트엔드 리포: [gotogether-s 보러가기](https://github.com/gotogether-s/gotogether-s)

- **프레임워크** : Next.js
- **언어** : TypeScript
- **라우터** : next/router
- **상태관리 라이브러리** : Redux toolkit
- **API 요청시** : getServerSideProps, axios
- **스타일 적용** : MUI, Scss, CSS Module

#### 백앤드

🔗  백엔드 리포: [gotogether-s-BE 보러가기](https://github.com/gotogether-s/gotogether-s-BE)

- **언어** : Java
- **프레임워크 & DB** : IntelliJ, Gradle, Spring, Spring Boot, Data JPA, Security, JWT, MySQL
- **CI/CD & INFRASTRUCTURE** : Jenkins, Docker, EC2, RDS, S3
- **기타** : POSTMAN, ERD Cloud

#### 기타

- **이슈관리** : Github Issue
- **문서화** : Notion
- **커뮤니케이션** : Slack, Discord, Zoom

<br />

## ✂️ 업무 분배

#### 프론트앤드

|                      변승훈                      |                                                                           조현아                                                                            |
| :----------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [@SeungHun6450](https://github.com/SeungHun6450) |                                                          [@hyeonahc](https://github.com/hyeonahc)                                                           |
|                       ...                        | 레이아웃, 네비게이션, 사이드바 <br/> 회원가입, 로그인, 계정확인, 비밀번호 변경 <br/> 설문조사, 상품 검색, 상품 예약, 결제, 404 <br/> 예약한 상품, 찜한 상품 |

#### 백앤드

|                    김현준                    |                이현승                 |                      김대곤                      |                   진우림                   |
| :------------------------------------------: | :-----------------------------------: | :----------------------------------------------: | :----------------------------------------: |
|   [@khjun723](https://github.com/khjun723)   | [@iheese](https://github.com/iheese)  |     [@bbyuggyu](https://github.com/bbyuggyu)     | [@jinwoorim](https://github.com/jinwoorim) |
| 상품 조회(상세, 추천, 카테고리별), 검색 기능 | 사용자, 큐레이션, 관리자 기능, AWS S3 | 서버 배포(AWS EC2, RDS, ROUTE 53), CI/CD, Dokcer |              예약 및 찜 기능               |

<br />

## ⚙️ 주요 기능과 로직

1. 서버사이드 렌더링
2. 사용자 설문을 통한 여행상품 추천 기능
   사용자의 유형과 여행취향 (연령대, 성별, 관심사 등)을 설문으로 조사해 사용자 특성에 맞는 패키지 여행상품을 추천
