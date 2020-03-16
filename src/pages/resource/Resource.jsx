import React, { Component } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { Card } from "antd";

import Search from "./Search";

import sampleImg from "../../assets/images/QBnOOoLaAfKPirc.png";

const { Meta } = Card;

const FulidContainer = styled.div`
  width: 80%;
  min-height: 700px;
  margin: 16px auto;
`;

const ResourceHeader = props => (
  <div className="resource-header">
    <div className="resource-logo"></div>
    <div className="resource-desc">
      <p style={{ fontSize: "16px" }}>
        <strong style={{ color: "#ffa200", marginRight: "16px" }}>
          {props.stat.type}
        </strong>
        <span style={{ color: "rgba(0,0,0,.25)" }}>{props.stat.desc}</span>
      </p>
      <p style={{ fontSize: "24px", color: "rgba(0,0,0,.85)" }}>
        基于实战需求，汇聚优质实用的资源
      </p>
    </div>
    <div className="resource-stat">
      <p>资源</p>
      <p className="resource-number">
        {Number(props.stat.count).toLocaleString()}
      </p>
    </div>
  </div>
);

const ResourceCard = props => (
  <Card
    hoverable
    className="resource-item"
    cover={<img alt="sample" src={sampleImg} />}
  >
    <Meta title={props.meta.title} description={<div>111</div>} />
  </Card>
);

export class Resource extends Component {
  state = {
    hotDownloads: [
      {
        url: "",
        name: "业务考试资料"
      },
      {
        url: "",
        name: "汇报PPT模板001"
      },
      {
        url: "",
        name: "汇报PPT模板010"
      },
      {
        url: "",
        name: "汇报PPT模板011"
      }
    ],
    resourceList: [
      {
        img: "",
        title: "PPT-2月份客户项目汇报PPT模板",
        url: "",
        type: "UED",
        po: "王隔壁",
        time: new Date().getTime()
      },
      {
        img: "",
        title: "界面-互联网前端开发必备250条总结",
        url: "",
        type: "前端",
        po: "王尼玛",
        time: new Date().getTime()
      },
      {
        img: "",
        title: "后端-Docker运维操作指南",
        url: "",
        type: "后端",
        po: "张国国",
        time: new Date().getTime()
      },
      {
        img: "",
        title: "其他-Git操作指南",
        url: "",
        type: "其他",
        po: "京津冀",
        time: new Date().getTime()
      },
      {
        img: "",
        title: "数据-WZ各个数组来源详解",
        url: "",
        type: "数据",
        po: "忘记",
        time: new Date().getTime()
      },
      {
        img: "",
        title: "PPT-设计资源整合包250G下载",
        url: "",
        type: "UED",
        po: "价值",
        time: new Date().getTime()
      }
    ]
  };
  render() {
    return (
      <Layout id="resource">
        <Search />
        <FulidContainer>
          <ResourceHeader
            stat={{
              type: "ALL",
              desc: "全部资源",
              count: "1024"
            }}
          />
          <div className="hot-download">
            <span className="hd-title">热门下载</span>
            {this.state.hotDownloads.map(d => (
              <span className="hd-item">
                <a href={d.url}>{d.name}</a>
              </span>
            ))}
          </div>
          <div className="resource-container">
            {this.state.resourceList.map(item => (
              <ResourceCard meta={item} />
            ))}
          </div>
        </FulidContainer>
      </Layout>
    );
  }
}

export default Resource;
