import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import { Map,Marker } from 'react-amap';
export default class ReactMap extends Component {
  constructor(){
    super();
    this.state = {
      visible: false,
      position:{}
    };
    this.mapCenter = {longitude: 104, latitude: 35};
    this.events={
      created: (ins) => {console.log(ins)},
      click:  (event) => {this.handleClick(event)}
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  componentDidMount() {
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleClick=(event)=>{
    console.log(event.lnglat)
    let position={
      longitude: event.lnglat.lng,
      latitude: event.lnglat.lat
    }
    this.setState({
      position:position
    },()=>{
      console.log(this.state.position)
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={900}
        >
          <div id="container" style={{width: '100%', height: '600px'}}>
            <Map loading={true} events={this.events} zoom={4.3} amapkey={"83af6a7581f4955c353064030564d04e"}  center={this.mapCenter}>
                        <Marker position={this.state.position} />
            </Map>
          </div>
        </Modal>
      </div>
    );
  }
}

