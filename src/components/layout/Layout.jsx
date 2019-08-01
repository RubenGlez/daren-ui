import React from 'react';
import classNames from 'classnames';
import Navbar from './Navbar';


const Layout = props => {
  return (
    <div className={classNames({
      'dui-layout': true,
      [`dui-layout-${props.className}`]: props.className,
    })}>
      {props.hasNavbar &&
        <Navbar />
      }
      <div className="dui-layout-content">
        {props.children}
      </div>
    </div>
  );
};

Layout.defaultProps = {
  hasNavbar: true,
  className: null,
};

export default Layout;
