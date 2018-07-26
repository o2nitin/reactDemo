import React from 'react';

export default  class Header extends React.Component { 
       
    render() {
        return(
            <div>
                <h2 className="text-info text-centre"> {this.props.title}</h2>
                </div>
            );
    }
}

Header.defaultProps = {
    title: 'welcome to react'
};