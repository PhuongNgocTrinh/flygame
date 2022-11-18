import { Link } from "react-router-dom";
import { DflexAll, FadeInUpDiv2 } from "../../../css/cssComponent";

const TitleOfBanner = ({ data }) => {
  return (
    <div className="title">
      <FadeInUpDiv2>
        <h4>The Norse saga continues</h4>
        <p>
          Embark on an epic and heartfelt journey as Kratos and Atreus struggle
          <br /> with holding on and letting go, available 9th November on PS4 &
          PS5
        </p>
        <div className="out-login">
          <DflexAll className="user">
            <Link to={`infoGame/${data.id}`} className="login">
              <div>Find out more</div>
            </Link>
          </DflexAll>
        </div>
      </FadeInUpDiv2>
    </div>
  );
};
export default TitleOfBanner;
