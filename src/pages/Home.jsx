import { Link } from "react-router-dom";

function Home() {
 return (
  <>
    <h1>메인 페이지 입니다.</h1>
    <Link to="/board">자유게시판</Link>
  </>
 )
}

export default Home;
