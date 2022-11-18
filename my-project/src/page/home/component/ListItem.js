import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FreeGameForListItem from "../childComponent/FreeGameForListItem";

import {
  ItemsFilter,
  MainListItem,
  PanigationMain,
} from "../../../css/cssHome";
import { getPagination } from "../../../redux/slice/producSlice";
import ListItemRow from "../childComponent/ListItemRow";

const ListItem = () => {
  const [cutListItem, setCutListItem] = useState("&startAt=0&endAt=8");
  const [focus, setFocus] = useState(1);
  const [valueInput, setValueInput] = useState("");
  const { itemsPaginations } = useSelector((state) => state.products);

  // const [valueArr, setValueArr] = useState([]);

  const arr = [
    { name: "Hight to Low", id: 1 },
    { name: "Low to Hight", id: 2 },
    { name: "YEAR", id: 3 },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPagination(cutListItem));
  }, [cutListItem]);
  const { products } = useSelector((state) => state.products);
  // const [sortItems, setSortItems] = useState(itemsPaginations);

  console.log(products);
  const handleclick = (item, index) => {
    setCutListItem(item);
    setFocus(index + 1);
  };
  let rel = [];
  const handleChangeSortItem = (e) => {
    const value = e.target.value;
    // sortItems ?? console.log(sortItems);

    // sortItems?.forEach((element) => {
    //   rel.push(element.price);
    //   rel.sort(function (a, b) {
    //     return a - b;
    //   });
    //   return setSortItems(rel);
    // });
  };

  if (products === 0) return <h1>loading...</h1>;
  console.log(products.listItems1);
  const dataFilter =
    products && products.items.filter((a) => a.name.includes(valueInput));

  const handleOnchange = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <MainListItem>
      <FreeGameForListItem />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <select onChange={handleChangeSortItem}>
              <option>chọn</option>

              {arr.map((item, index) => {
                return (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <div className="row">
              {itemsPaginations &&
                itemsPaginations?.map((item, index) => {
                  return (
                    <>
                      {" "}
                      <Link
                        to={`infoGame/${item._id}`}
                        key={index}
                        className="col-3 main-content-pagination"
                      >
                        <img className="img-listitem" src={item.imgItem} />
                        <div className="name-pani">{item.name}</div>
                        <div>$ {item.price}</div>
                      </Link>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="col-3">
            <div className="filter">
              <h6>Filter</h6>

              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  position: "relative",
                }}
              >
                <TextField
                  onChange={handleOnchange}
                  value={valueInput}
                  fullWidth
                  label="search"
                  id="fullWidth"
                />
                {valueInput.length > 0 ? (
                  <button
                    onClick={() => {
                      setValueInput("");
                    }}
                    className="btn-clear"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                ) : (
                  ""
                )}
              </Box>
            </div>
            {valueInput.length > 0 ? (
              <ItemsFilter>
                <div className="box-filter">
                  <ul>
                    {dataFilter.map((a, b) => {
                      return (
                        <Link to={`infoGame/${a._id}`} key={b}>
                          <li>
                            {" "}
                            <img className="img-filter" src={a.imgItem} />
                            {a.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </ItemsFilter>
            ) : (
              ""
            )}
          </div>

          <PanigationMain>
            {products &&
              products.panigation.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      className="btn-panigation"
                      onClick={() => {
                        handleclick(item, index);
                      }}
                      sx={
                        focus === index + 1
                          ? {
                              background: "blue",
                              color: "#fff",
                            }
                          : { background: "red", color: "#fff" }
                      }
                      variant="contained"
                    >
                      {index + 1}
                    </Button>
                  </div>
                );
              })}
          </PanigationMain>
        </div>
        <div>
          <ListItemRow products={products} />
        </div>
      </div>
    </MainListItem>
  );
};

export default ListItem;
