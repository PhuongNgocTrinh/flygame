import * as React from "react";
import { useState, useEffect } from "react";
import RenderUi from "../childComponent/RenderUi";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getitems } from "../../../redux/slice/producSlice";
import Paper from "@mui/material/Paper";

export function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [listCateroly, setListCateroly] = useState("action");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getitems(listCateroly));
  }, [listCateroly]);

  const { items } = useSelector((state) => state.products);
  const { products } = useSelector((state) => state.products);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (items === 0) return <h1>loading...</h1>;

  return (
    <div className="main-category">
      <h1>Category</h1>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottsom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {products &&
              products.category.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    onClick={() => {
                      setListCateroly(item);
                    }}
                    label={item}
                    {...a11yProps(index)}
                  />
                );
              })}
          </Tabs>
        </Box>
      </Box>

      <div className="row">
        {items &&
          items.map((item, index) => {
            return <RenderUi key={index} item={item} />;
          })}
      </div>
    </div>
  );
}
