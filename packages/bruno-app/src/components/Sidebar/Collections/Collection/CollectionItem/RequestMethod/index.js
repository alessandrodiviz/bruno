import React from 'react';
import classnames from 'classnames';
import StyledWrapper from './StyledWrapper';

const RequestMethod = ({ item }) => {
  if (!['http-request', 'graphql-request'].includes(item.type)) {
    return null;
  }

  const getClassname = (method = '') => {
    method = method.toLocaleLowerCase();
    return classnames('mr-1', {
      'method-get': method === 'get',
      'method-post': method === 'post',
      'method-put': method === 'put',
      'method-delete': method === 'delete',
      'method-patch': method === 'patch',
      'method-head': method === 'head',
      'method-options': method == 'options',
      'method-connect': method == 'connect',
      'method-trace': method == 'trace'
    });
  };

  return (
    <StyledWrapper>
      <div className={getClassname(item.request.method)}>
        <span className="uppercase">{item.request.method}</span>
      </div>
    </StyledWrapper>
  );
};

export default RequestMethod;
