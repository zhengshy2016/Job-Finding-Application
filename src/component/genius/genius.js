import React from 'react';
import axios from 'axios';
import UserCard from '../usercard/usercard';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';
class Genius extends React.Component{
    componentDidMount(){
        this.props.getUserList('boss');
    }
    render(){
        return (
           <UserCard userlist={this.props.userlist}></UserCard>
        );
    }
}
export default connect(state=>state.chatuser,{getUserList})(Genius);