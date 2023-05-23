import Header from "./components/header/Header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "./action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);
  const store = useSelector((store) => store);
  console.log(store);
  return <Header />;
}

export default App;
