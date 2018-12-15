import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem,Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from '../../redux/user.redux';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
        this.handleRegister=this.handleRegister.bind(this);
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state);
        
    }
    render(){
        const RadioItem=Radio.RadioItem;
        return  (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null};
                <Logo></Logo>
                {this.props.msg?<p className='err-msg'>{this.props.msg}</p>:null}
                <List>
                    <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                    <WhiteSpace/>
                    <InputItem type="password" onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem checked={this.state.type=='genius'}
                        onChange={()=>this.handleChange('type','genius')}>
                        牛人
                    </RadioItem>
                    <RadioItem checked={this.state.type=='boss'}
                        onChange={()=>this.handleChange('type','boss')}>
                        BOSS
                    </RadioItem>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </List>
            </div>

        )
    }
}

export default connect(state=>state.user,{register})(Register);