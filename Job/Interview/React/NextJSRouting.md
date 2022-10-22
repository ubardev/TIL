- location.replace("url"): 로컬 state 유지 안됨(리렌더)
- router.push(url): 로컬 state유지 / data fetching은 일어남
- router.push(url, as, {shallow: true}): 로컬 state유지 / data fetching x

---

- <a href="/posts/first-post">첫번째 글(a tag)</a>
  - 모든걸 새로 불러옴
  - reload시킴
- <Link href="/posts/first-post"><a>첫번째 글</a></Link>
  - 필요한 부분들만 가져옴

Client Side Navigate
browser에서 url을 직접 쳐서 이동하는 것과 달리 JS상에서 page컴포넌트를 교체하는 것

Cide Splitting
Next.js는 Automatic Code Splitting을 제공

- 특정 페이지에 접근 할 때는 해당 페이지를 그릴 때 필요한 chunk만 로드
- 페이지 이동을 할 땐 목적지 페이지에 필요한 chunk만 추가 로드

이를 통해 성능이 최적화 된다.
