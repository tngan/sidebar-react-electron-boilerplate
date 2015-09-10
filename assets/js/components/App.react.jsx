/** @jsx React.DOM */
var React = require('react');
var Sidebar = require('./Sidebar.react');
var ContentSection = require('./ContentSection.react');

var App = React.createClass({
    getInitialState: function(){
        return {
            pageIndex: 0    // 0 is the application page
        }
    },
    handleNavItemClick: function(pageId){
        this.setState({
            pageIndex: pageId
        });
    },
    render: function(){
        return (
            <div>
                <Sidebar clickNavItem={this.handleNavItemClick}/>
                <ContentSection pageIndex={this.state.pageIndex}/>
            </div>
        )
    }
});

module.exports = App;
