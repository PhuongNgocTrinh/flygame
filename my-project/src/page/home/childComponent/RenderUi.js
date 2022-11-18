import { Link } from "react-router-dom";
import { Img, Pcategory, ImgTab } from "../../../css/cssHome";
const RenderUi = (props) => {
  const { item } = props;
  return (
    <div className="col-3">
      <Link to={`infoGame/${item._id}`} className="caretory-game">
        <Img className="caretory-img" src={item.imgItem} />
        <Pcategory>{item.name}</Pcategory>
      </Link>
    </div>
  );
};
export default RenderUi;
