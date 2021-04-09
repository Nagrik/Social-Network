import React from 'react';
import 'antd/dist/antd.css';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
    return (
        <>
            <LoadingOutlined style={{ fontSize: 24 }} spin />;
        </>
    );
};

export default Loader;
