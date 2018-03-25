// Higher order component - component that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>The info is: {props.info}</p>
    </div>
);


// Higher order component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            {/* takes every key/value page on the object (using the spreading operator) and passes them down to the child. So info="there are details" get's passed into this higher order component's props, which is then passed down using the spread operator to the <WrappedComponent />, which is passed into the child component Info */}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Your are not authenticated</p>
            )}
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="there are details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are details" />, document.getElementById('app'));