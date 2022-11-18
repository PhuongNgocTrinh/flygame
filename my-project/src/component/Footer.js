import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
export default function App() {
  const theme = createTheme({
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            // Match 24px = 3 * 2 + 1.125 * 16
            boxSizing: "content-box",
            padding: 3,
            fontSize: "1.125rem",
          },
        },
      },
    },
  });
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <div
        style={{
          backgroundImage: `no-repeat center/10%  url(../../images/img-footer.png)`,
        }}
      ></div>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <YouTubeIcon fontSize="large" sx={{ color: pink[500] }} />
          </a>
          <a href="" className="me-4 text-reset">
            <FacebookIcon fontSize="large" color="primary" />
          </a>
          <a href="" className="me-4 text-reset">
            <TwitterIcon color="primary" fontSize="large" />
          </a>
          <a href="" className="me-4 text-reset">
            <InstagramIcon sx={{ color: pink[400] }} fontSize="large" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">suport</h6>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  e terms of use
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Websit
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PlayStation Studios
                </a>
              </p>{" "}
              <p>
                <a href="#!" className="text-reset">
                  Legal Documents & Notices
                </a>
              </p>{" "}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Health warning{" "}
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Age ratings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Intellectual property notices
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PlayStation careers
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <LocationOnIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MailIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <ThemeProvider theme={theme}>
                  <Chip icon={<MdPhone />} label="Call me :  + 01 234 567 88" />
                </ThemeProvider>{" "}
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="/">
          Phuonghehe.com
        </a>
      </div>
    </MDBFooter>
  );
}
