- DB 테이블 생성
  yarn prisma db push

- DB스키마 변경 시 실행  
  yarn prisma generate

- DB스키나 pull(백업용으로 사용)
  yarn prisma db pull --schema=./prisma/test.prisma

- product 테이블에 데이터 넣기  
  yarn ts-node prisma/product.ts

- product, category 테이블에 데이터 넣기  
  yarn ts-node prisma/product-with-category.ts

- Google OAuth 구현방법
  https://www.npmjs.com/package/@react-oauth/google

- NextAuth 설정 방법
  https://next-auth.js.org/getting-started/example
