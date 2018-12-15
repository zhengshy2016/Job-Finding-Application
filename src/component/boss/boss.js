import React from 'react';
import axios from 'axios';
import UserCard from '../usercard/usercard';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';
class Boss extends React.Component{
    componentDidMount(){
        this.props.getUserList('genius');
       /* axios.get('/user/list?type=genius')
            .then(res=>{
                if(res.data.code==0){
                    this.setState({data:res.data.data})
                }
            })*/
    }
    render(){
        return <UserCard userlist={this.props.userlist}></UserCard>;
    }
}
export default connect(state=>state.chatuser,{getUserList})(Boss);