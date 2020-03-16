import React, { Component } from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import searchBannerBg from "../../assets/images/search-banner-bg.png";
import searchIcon from "../../assets/images/icon-search-normal.png";
import searchIconHover from "../../assets/images/icon-search-hover.png";

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
`;
const CoreContainer = styled.div`
  position: absolute;
  width: 60%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 32px;
  margin-bottom: 16px;
  line-height: 32px;
`;
const TabItem = styled.span`
  padding: 0 16px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &.active {
    border-radius: 15px;
    background-color: #fff;
    color: #3172ff;
  }
`;
const InputContainer = styled.div`
  display: flex;
  position: relative;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  line-height: 48px;
  border: none;
  border-radius: 0 2px 2px 0;
  padding: 0 16px;
  color: #333;
  background: #fff;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;
const SearchButton = styled.i`
  position: absolute;
  top: 0;
  right: 16px;
  bottom: 0;
  width: 24px;
  height: 24px;
  margin: auto;
  background-image: url(${searchIconHover});
  background-size: cover;
  cursor: pointer;
  &:hover {
    background-image: url(${searchIcon});
  }
`;

class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <img alt="search-banner-bg" src={searchBannerBg} />
        <CoreContainer>
          <TabContainer>
            <TabItem className="active">全部</TabItem>
            <TabItem>UED设计</TabItem>
            <TabItem>前端开发</TabItem>
            <TabItem>后端开发</TabItem>
            <TabItem>数据分析</TabItem>
            <TabItem>PPT资源</TabItem>
            <TabItem>业务相关</TabItem>
          </TabContainer>
          <InputContainer>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="0" style={{ textAlign: "center" }}>
                    <a href="http://www.alipay.com/">全部</a>
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
              placement="bottomCenter"
            >
              <span className="search-label" onClick={e => e.preventDefault()}>
                全部 <DownOutlined style={{ marginLeft: "16px" }} />
              </span>
            </Dropdown>
            <StyledInput placeholder="请输入查询的资源或关键字" />
            <SearchButton />
          </InputContainer>
        </CoreContainer>
      </SearchContainer>
    );
  }
}

export default Search;
