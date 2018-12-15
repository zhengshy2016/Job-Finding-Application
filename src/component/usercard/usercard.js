import React from 'react';
import PropTypes from 'prop-types';
import {Card,WhiteSpace,WingBlank} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {withRouter} from 'react-router-dom';
class UserCard extends React.Component{
    static proTypes={
        userlist:PropTypes.array.isRequired
    }
    handleClick(v){
        this.props.history.push(`/chat/${v._id}`);
    }
    render(){
        return (
            <WingBlank>
                {this.props.userlist.map(v=>(
                    v.avatar?(<Card key={v._id} onClick={()=>this.handleClick(v)}>
                        <Card.Header
                            title={v.user}
                            thumb={require(`../images/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}>
                        </Card.Header>
                        <Card.Body>
                        {v.type=='boss'?<div>公司:{v.company}</div>:null}
                            {v.desc.split('\n').map(d=>(
                                <div key={d}>{d}</div>
                            ))}
                            {v.type=='boss'?<div>薪资:{v.money}</div>:null}
                        </Card.Body>
                    </Card>):null
                ))}
            </WingBlank>
        )
    }
}

export default withRouter(UserCard);