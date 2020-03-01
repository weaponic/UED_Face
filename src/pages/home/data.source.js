import React from "react";

import logo from "./images/logo.png";
import icon01 from "./images/icon01.png";
import icon02 from "./images/icon02.png";
import icon03 from "./images/icon03.png";
import icon04 from "./images/icon04.png";
import icon05 from "./images/icon05.png";
import icon06 from "./images/icon06.png";
import image01 from "./images/image1.jpg";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page k744l5ka1v-editor_css" },
  logo: {
    className: "header3-logo k72x5yplx4-editor_css",
    children: logo
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item0",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <>
                  <p>首页</p>
                </>
              ),
              name: "text",
              className: "k72y4483eu-editor_css"
            }
          ]
        },
        subItem: [
          // {
          //   name: "sub0",
          //   className: "item-sub",
          //   children: {
          //     className: "item-sub-item",
          //     children: [
          //       {
          //         name: "image0",
          //         className: "item-image",
          //         children:
          //           "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"
          //       },
          //       {
          //         name: "title",
          //         className: "item-title",
          //         children: "Ant Design"
          //       },
          //       {
          //         name: "content",
          //         className: "item-content",
          //         children: "企业级 UI 设计体系"
          //       }
          //     ]
          //   }
          // },
          // {
          //   name: "sub1",
          //   className: "item-sub",
          //   children: {
          //     className: "item-sub-item",
          //     children: [
          //       {
          //         name: "image0",
          //         className: "item-image",
          //         children:
          //           "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"
          //       },
          //       {
          //         name: "title",
          //         className: "item-title",
          //         children: "Ant Design"
          //       },
          //       {
          //         name: "content",
          //         className: "item-content",
          //         children: "企业级 UI 设计体系"
          //       }
          //     ]
          //   }
          // }
        ]
      },
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <>
                  <p>资源</p>
                </>
              ),
              name: "text"
            }
          ]
        }
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <>
                  <p>社区</p>
                </>
              ),
              name: "text"
            }
          ]
        }
      },
      {
        name: "item3",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <>
                  <p>我们</p>
                </>
              ),
              name: "text"
            }
          ]
        }
      }
    ]
  },
  mobileMenu: { className: "header3-mobile-menu" }
};
export const Banner00DataSource = {
  wrapper: { className: "banner0 k746si8291a-editor_css" },
  textWrapper: { className: "banner0-text-wrapper k746vp9ozap-editor_css" },
  title: {
    className: "banner0-title k746sekcb0s-editor_css",
    children: (
      <>
        <p>上海研发中心资源共享平台</p>
      </>
    )
  },
  content: {
    className: "banner0-content k746x9ol57b-editor_css",
    children: (
      <>
        <p>汇集优质的资源打造高效工作环境</p>
      </>
    )
  },
  button: {
    className: "banner0-button k746xs9ysa7-editor_css",
    children: "更多"
  }
};
export const Content30DataSource = {
  wrapper: {
    className: "home-page-wrapper content3-wrapper k730a3zx8ob-editor_css"
  },
  page: { className: "home-page content3 k72y4szewuq-editor_css" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>优质的共享资源</p>
          </>
        ),
        className: "title-h1 k72plis16ml-editor_css"
      },
      {
        name: "content",
        className: "title-content k72xlyy5be-editor_css",
        children: (
          <>
            <p>基于烽火实战开发项目资源</p>
          </>
        )
      }
    ]
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon k72y54wccpj-editor_css",
            children: icon01
          },
          textWrapper: { className: "content3-text k72yk8jdn7n-editor_css" },
          title: {
            className: "content3-title",
            children: (
              <>
                <p>UED设计资源</p>
              </>
            )
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  优秀的设计，优美的视觉体验。建设中。。。
                </p>
              </>
            )
          }
        }
      },
      {
        name: "block1",
        className: "content3-block k733ccr36bi-editor_css",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon k72yiuk47-editor_css",
            children: icon02
          },
          textWrapper: { className: "content3-text k72yms1bnat-editor_css" },
          title: {
            className: "content3-title",
            children: (
              <>
                <p>界面开发资源</p>
              </>
            )
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  优秀的开发者，优秀的前端组件与模板。建设中。。。
                </p>
              </>
            )
          }
        }
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon k72ylh1jmeu-editor_css",
            children: icon03
          },
          textWrapper: { className: "content3-text k72ylvhc5r9-editor_css" },
          title: {
            className: "content3-title",
            children: (
              <>
                <p>后台开发资源</p>
              </>
            )
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  优秀的开发者，经验共享。链接到confluence。建设中。。。
                </p>
              </>
            )
          }
        }
      },
      
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon k72yim0x1k-editor_css",
            children: icon05
          },
          textWrapper: { className: "content3-text k72ykokvzf-editor_css" },
          title: {
            className: "content3-title",
            children: (
              <>
                <p>PPT模板资源</p>
              </>
            )
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  大量的PPT实例下载。建设中。。。
                </p>
              </>
            )
          }
        }
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon k72ymzd46z-editor_css",
            children: icon06
          },
          textWrapper: { className: "content3-text k72yp06215s-editor_css" },
          title: {
            className: "content3-title",
            children: (
              <>
                <p>业务相关资源</p>
              </>
            )
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  业务培训资料，链接到confluence。建设中。。。
                </p>
              </>
            )
          }
        }
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon k72ynqcov26-editor_css",
            children: icon04
          },
          textWrapper: { className: "content3-text k72ynzi0jo-editor_css" },
          title: {
            className: "content3-title",
            children: (
              <>
                <p>虚位以待</p>
              </>
            )
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  欢迎创建自己贡献的板块。
                </p>
              </>
            )
          }
        }
      }
    ]
  }
};
export const Content10DataSource = {
  wrapper: {
    className: "home-page-wrapper content1-wrapper k731f3cyx2n-editor_css"
  },
  OverPack: {
    className: "home-page content1 k7319ra46nj-editor_css",
    playScale: 0.3
  },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: image01,
    className: "k72zpezfw37-editor_css"
  },
  textWrapper: {
    className: "content1-text k72w5mmm3g-editor_css",
    md: 14,
    xs: 24
  },
  title: {
    className: "content1-title k730urz8fa8-editor_css",
    children: (
      <>
        <p>大神云集的“烽火”社区</p>
      </>
    )
  },
  content: {
    className: "content1-content k74d7najss8-editor_css",
    children: (
      <>
        <p>
          建设中。。。
        </p>
        <p>
        </p>
      </>
    )
  }
};
export const Teams20DataSource = {
  wrapper: { className: "home-page-wrapper teams2-wrapper" },
  page: { className: "home-page teams2" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>季度/年度优秀</p>
          </>
        ),
        className: "k72w80qb97a-editor_css"
      }
    ]
  },
  block: {
    className: "block-wrapper",
    gutter: 72,
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>王富贵</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>老王</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>刘德华</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block3",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>王富贵</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block4",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>老王</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block5",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>刘德华</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block6",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>王富贵</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block7",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>老王</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block8",
        className: "block",
        md: 8,
        xs: 24,
        image: {
          name: "image",
          className: "teams2-image",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ"
        },
        titleWrapper: {
          className: "teams2-textWrapper",
          children: [
            {
              name: "title",
              className: "teams2-title",
              children: (
                <>
                  <p>刘德华</p>
                </>
              )
            },
            {
              name: "content",
              className: "teams2-job",
              children: (
                <>
                  <p>界面 全栈工程师</p>
                </>
              )
            },
            {
              name: "content1",
              className: "teams2-content",
              children: (
                <>
                  <p>
                    该大神职龄88年，能文能舞、上刀山下火海在所不惜，如有不服不吝赐教！
                  </p>
                </>
              )
            }
          ]
        }
      }
    ]
  }
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <>
        <span>
          ©2020&nbsp;<a href="https://motion.ant.design">UED FiberHome</a>
          &nbsp;All Rights Reserved
        </span>
      </>
    )
  }
};
