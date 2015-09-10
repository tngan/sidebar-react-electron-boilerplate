/** @jsx React.DOM */
var React = require('react');
var Sidebar = React.createClass({
    getInitialState: function(){
        return {
            // navigation bar item
            data:[
                {label:'Application'},
                {label:'Email'},
                {label:'Github'}
            ]
        }
    },
    render: function(){
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                            Dashboard
                        </a>
                    </li>
                    <SidebarItemList clickNavItem={this.props.clickNavItem} data={this.state.data}/>
                </ul>
            </div>
        )
    }
});
var SidebarItemList = React.createClass({
    clickNavItem: function(index){
        this.props.clickNavItem(index);
    },
    render: function(){
        var self = this;
        return (
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        {
                          this.props.data.map(function(item,index){
                              return (
                                  // bind self and index and let index be the first argument of clickNavItem
                                  // http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/
                                  <li onClick={self.clickNavItem.bind(self,index)}>
                                      <a href="#">{item.label}</a>
                                  </li>
                              )
                          })
                        }
                    </ul>
                </div>
        )
    }
});

module.exports = Sidebar;
