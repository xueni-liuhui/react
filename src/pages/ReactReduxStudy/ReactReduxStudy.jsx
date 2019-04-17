import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchDataAction from '../../actions/fetchdata_action';
class ReactReduxStudy extends Component{
  constructor(props){
    super(props);
    console.log(this.props)

    this.state={

    }

  }
  componentDidMount(){
    this.props.dispatch(fetchDataAction);//加载远程数据
  }
  render() {
    const  {list}=this.props.fetchdata;
    const listHtml=list.map((item,index)=>{
       return (<li key={index}>{item.title}</li>)
    })
    return (
      <div>
        <ul>
          {listHtml}
        </ul>
      </div>
    );
  }
}
const mapStateToProps=(state,ownProps)=>{
  return{
    fetchdata:state.fetchdata
  }

}
export default connect(mapStateToProps)(ReactReduxStudy)
