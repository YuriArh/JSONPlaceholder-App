import { useEffect } from "react";
import { getComments } from "../action";
import { useDispatch, useSelector } from "react-redux";
import storeType from "../types/storeType";

function Comments(props: { id: number }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(props.id));
  }, []);
  const comments = useSelector((store: storeType) => store.comments.comments);
  console.log(comments);
  return <></>;
}

export default Comments;
