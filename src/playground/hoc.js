import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
  <h1>inoformation</h1>
  <p>the infor is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
    { props.isAdmin && <p>warning this is sensittive info</p>}
    <WrappedComponent {...props}/>
    </div>
  );
};


const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
    { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>not authenticated</p>}

    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info = 'info prop bullshit' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info = 'authenticated props' />, document.getElementById('app'));
