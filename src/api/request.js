// 用于错误信息提示，后续更换为埋点
// import React from 'react';
// import { Redirect } from 'react-router-dom';
import { message } from 'antd';
// import login from "../page/login/login";

const request = (url, config, _this) => {
    return fetch(url, config).then((res) => {
        if (!res.ok) {
            // 服务器异常返回
            // throw Error('');
            message.error('服务异常，请检查服务配置');
        }

        return res.json();
    }).then((resJson) => { // 获取上面得返回值JSON值
        // return (<Redirect path="/login" to="../page/login/login"></Redirect>)
        if (resJson.code === -1) {
            // 重定向
            _this.props.history.push('/login');
        }

        // 不做处理返回值
        return resJson;
    }).catch((error) => {
        // 公共错误处理
        message.error(error.toString());
    });
};

// GET请求
export const get = (url, _this) => {
    return request(url, {
        headers: {
            'Token': sessionStorage.getItem('token')
        },
        method: 'GET',
    }, _this);
};

// POST请求
export const post = (url, data, _this) => {
    return request(url, {
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
            'Token': sessionStorage.getItem('token')
        },
        method: 'POST'
    }, _this);
};

// POST请求:form表单提交
export const postForm = (url, data, _this) => {
    let formdata = new FormData();
    for (let key in data) {
        formdata.append(key, data[key]);
    }

    return request(url, {
        body: formdata,
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Token': sessionStorage.getItem('token')
        },
        method: 'POST'
    }, _this);
};