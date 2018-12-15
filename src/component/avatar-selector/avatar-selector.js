import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {Grid,List} from 'antd-mobile';
import PropTypes from 'prop-types';
class AvatarSelector extends React.Component{
    static propTypes={
        selectAvatar:PropTypes.func
    }
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){
        const avatarList='boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',')
                .map(v=>({
                    icon:require(`../images/${v}.png`),
                    text:v
                }));
        const gridHeader=this.state.text?(<div><span>已选择头像</span><img style={{width:20}} src={this.state.icon}/></div>):<div>请选择头像</div>;
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid data={avatarList} columnNum={5}
                        onClick={ele=>{
                            this.setState(ele);
                            this.props.selectAvatar(ele.text)
                        }}>
                    </Grid>
                </List>
              
            </div>
        )
    }
}

export default AvatarSelector;