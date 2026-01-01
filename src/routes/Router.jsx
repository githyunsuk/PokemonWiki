import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Board from "../pages/Board.jsx";
import BoardEditor from "../pages/BoardEditor.jsx";
import Home from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // 게시판 그룹
      {
        path: "board",
        children: [
          {
            index: true, 
            element: <Board />,
          },
          {
            path: "new", 
            element: <BoardEditor />,
          },
        ],
      },
    ],
  },
]);

export default router;
