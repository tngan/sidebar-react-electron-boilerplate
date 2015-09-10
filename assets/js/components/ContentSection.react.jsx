/** @jsx React.DOM */
var React = require('react');

var HazelnutWebView = React.createClass({
    render: function(){
        var wvStyle = { height: 600 };
        return (
            <div style={wvStyle}>
                <webview src={this.props.src} autosize="on"></webview>
            </div>
        )
    }
});

var ContentSection = React.createClass({
    contentDispatch: function(){
        switch(this.props.pageIndex){
            case 1: {
                return <HazelnutWebView src="https://mail.google.com/" />
            }
            case 2: {
                return <HazelnutWebView src="https://github.com/login" />
            }
            default: {
                return (
                    <div>
                        <h1>My Applications</h1>
                        <ToggleButton/>
                    </div>
                )
            }
        }
    },
    render: function(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {this.contentDispatch()}
                    </div>
                </div>
            </div>
        )
    }
});

var ToggleButton = React.createClass({
    getInitialState: function(){
        return {isToggled: false};
    },
    handleClick: function(e){
        e.preventDefault();
        this.setState({isToggled: !this.state.isToggled});
    },
    render: function(){
        return (
            <a href="#menu-toggle" className="btn btn-default" id="menu-toggle" onClick={this.handleClick}>Toggle Sidebar</a>
        )
    }
});

module.exports = ContentSection;
