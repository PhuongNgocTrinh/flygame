import styled from "styled-components";

export const MainGame = styled.div`
  padding-top: 20px;
  color: #fff;
  /* border: 1px solid; */
  padding: 0 48px;
  .img-Game {
    width: 100%;
  }
  .slick-slider .slick-prev:before,
  .slick-slider .slick-next:before {
    color: #fff !important;
  }
  .slick-slider .slick-list .slick-track {
  }
  .slick-slider .slick-prev {
    left: 14px !important;
    top: 28% !important;
    z-index: 100;
  }
`;
export const MainGameChild = styled.div`
  background: #171717;
  padding: 20px;
  border-radius: 15px;
  img {
    width: 100%;
    border-radius: 15px;
  }
  .container div .slick-slider .slick-prev:before,
  .container div .slick-slider .slick-next:before {
    color: #fff !important;
  }

  .pa {
    padding: 10px 0;

    a {
      text-decoration: none;
      color: #fff;
    }
    .name-item-genres {
      padding-top: 10px;
    }
  }
  .pa-1 {
    padding: 35px;
    padding-bottom: 16px;
    background: rgb(32, 32, 32);
    width: 270px;
    height: 305px;

    margin: 0 auto;
    border-radius: 15px;
    border-radius: 15px;
    text-align: center;
  }
`;
export const ItemsFilter = styled.div`
  max-height: 435px;
  object-fit: cover;
  overflow: hidden;
  overflow-y: scroll;
  background: #1f1f1f;
  margin-top: 10px;
  color: #fff;

  ul {
    padding: 0;
  }
  a {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
  }
  .img-filter {
    width: 20%;
    margin-right: 10px;
  }
  li {
    padding: 10px 12px;
    margin-bottom: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    :hover {
      background-color: #fff;
      color: #000c;
    }
  }
`;
export const MainListItem = styled.div`
  /* margin-top: 70px; */

  .img-listitem {
    width: 100%;
    border-radius: 10px;
  }
  .main-content-pagination {
    height: 290px;
    text-decoration: none;
    margin-top: 20px;
    color: #fff;
  }
  .name-pani {
    margin-top: 10px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .filter {
    color: #fff;
  }
  .btn-filter-pani {
    position: absolute;
    right: 6px;
    top: 14px;
    margin-top: 0px;
  }
  .box-filter {
    width: 100%;
    /* background-color: #fff; */
    /* padding: 12px; */
  }
  li {
    margin-bottom: 10px;
  }
  .btn-clear {
    width: 30px;
    height: 30px;
    padding: 10px;
    position: absolute;
    top: 25%;
    right: 5%;
    outline: none;
    border: 1px solid transparent;
    background: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      border: 1px solid #fff;
      border-radius: 100%;
    }
  }
`;
