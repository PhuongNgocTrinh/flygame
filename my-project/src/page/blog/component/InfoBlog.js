import { useSelector, useDispatch } from "react-redux";
import { getBlogById } from "../../../redux/slice/producSlice";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const InfoBlog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogById(params.id));
  }, [params]);
  const { blogsId } = useSelector((state) => state.products);

  if (blogsId === 0) return <h1>loading...id</h1>;

  return (
    <>
      {blogsId.map((itemForId, index) => {
        return (
          <div style={{ marginTop: "70px" }} className="container" key={index}>
            <div style={{ display: "flex" }}>
              {" "}
              <img style={{ width: "60%" }} src={itemForId.img} alt={index} />
              <div>
                {" "}
                <h1>{itemForId.title}</h1>
                <p>{itemForId.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InfoBlog;
