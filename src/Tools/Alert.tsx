import React from 'react';
import { Alert as AlertMessage} from 'antd';

const Alert = ({text}:any) => {
    return (
            <AlertMessage
                message="Message cannot be empty"
                description={text}
                type="error"
                showIcon
            />
    );
};

export default Alert;
