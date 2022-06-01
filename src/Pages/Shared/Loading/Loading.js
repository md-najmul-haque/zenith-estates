import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div>
            <ReactLoading className='flex justify-center items-center' type={'spokes'} color={'#37CDBE'} height={100} width={40} />
        </div>
    );
};

export default Loading;