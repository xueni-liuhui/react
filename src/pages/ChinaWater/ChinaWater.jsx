import React, {Component} from 'react';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import {geoCoordMap} from './data';
import {rawData} from "./data";
let divObj;
class ChinaWater extends Component {
  static displayName = 'ChinaWater';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      option:{
        animation: false,
        tooltip:{trigger:'axis'},
        geo:{
          map:"china",
          roam : true,
          zoom : 1.2,
          label:{
            emphasis:{
              show:false,
              areaColor:"#eee"
            }
          },
          itemStyle:{//地图区块颜色、
            normal:{
              areaColor: "#55c3fc",
              borderColor : '#fff'
            },
            emphasis: {
              areaColor:"#21aef8"
            }

          }
        },
        series : []
      },
    };
  }
  componentDidMount() {
    setTimeout(this.renderEachProvince(), 0);
  }
  renderEachProvince=()=> {
    let option = {
      xAxis: [],
      yAxis: [],
      grid: [],
      series: []
    };
    let map_Obj= this.echarts_react.getEchartsInstance();//获取echartsAPI对象
    this.echarts_react.echartsLib.util.each(rawData,(dataItem, idx)=> {
      let	geoCoord = geoCoordMap[dataItem[0]];
      let coord = map_Obj.convertToPixel('geo', geoCoord);
      idx += '';
      let  inflationData = [];
      for (let k = 1; k < 4; k++) {
        inflationData.push(dataItem[k])
      }
      option.xAxis.push({
        id: idx,
        gridId: idx,
        type: 'category',
        name: dataItem[0],
        nameLocation: 'middle',
        nameGap: 3,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#666'
          }
        },
        data: ["险工险段","堤防长度"],
        z: 100

      });
      option.yAxis.push({
        id: idx,
        gridId: idx,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#1C70B6'
          }
        },
        z: 100
      });
      option.grid.push({
        id: idx,
        width: 15,
        height: 20,
        left: coord[0] - 15,
        top: coord[1] - 15,
        z: 100
      });
      option.series.push({
        id: idx,
        type: 'bar',
        xAxisId: idx,
        yAxisId: idx,
        barGap: 0,
        barCategoryGap: 0,
        data:inflationData,
        z: 100,
        itemStyle: {
          normal: {
            color: function(params){
              // 柱状图每根柱子颜色
              let colorList = ['#F75D5D','#59ED4F'];
              return colorList[params.dataIndex];
            }
          }
        }
      });
    });
    map_Obj.setOption(option)
  }
  handleClick=(obj)=>{//点击对象
    console.log(obj)
    if(obj.componentSubType === "bar"){//点击柱状图
      this.clickBar(obj)
    }else{//点击地图区域
      this.clickMap(obj)
    }
  }
  getMousePos=(event)=>{//点击的时候获取鼠标横纵坐标的位置
    let e = event || window.event;
    let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    let x =e.offsetX + scrollX;
    let y =e.offsetY + scrollY;
    return {'x': x,'y': y};
  }
  createNewBox=(createType,obj)=>{//每次点之后，清除旧的显示内容，生成新的box
    let divX =  this.getMousePos(obj.event)['x'];
    let divY = this.getMousePos(obj.event)['y'];
    let isObj = document.getElementById(createType);//判断是否进行过点击，生成了柱状图或者方框；
    if(isObj!=null){//清除方框或者柱状图
      isObj.parentNode.removeChild(isObj);

    }
    divObj = document.createElement('div');
    let textTest       = document.createElement("p");
        textTest.innerHTML="<a> 我是调转</a>"
    divObj.id=createType;
    divObj.style.width="250px";
    divObj.style.height="180px";
    divObj.style.border="1px solid #f5f5f5";
    divObj.style.position="absolute";
    divObj.style.top=divY+"px";
    divObj.style.left=divX+"px";
    divObj.style.backgroundColor="#fff";
    divObj.appendChild(textTest)
    return divObj;

  }
  clickMap=(obj)=>{//点击地图区域处理
    let divObj=this.createNewBox("_map",obj);
    let parentNode=document.getElementsByClassName("wrap")[0];
        parentNode.appendChild(divObj);
  }
  clickBar=(obj)=>{//点击柱状图处理
    let divObj=this.createNewBox("_bar",obj);
    let parentNode=document.getElementsByClassName("wrap")[0];
        parentNode.appendChild(divObj);
    this.createBar();
  }

  createBar=()=>{//生成柱状图
    let barObj=echarts.init(document.getElementById("_bar"));
    let option={
          backgroundColor: 'rgba(255,255,255,.3)',
          legend: {
            data: ['数据A','数据B','数据C']
          },
          xAxis: [
            {
              type: 'category',
              data: ['数据A','数据B','数据C']
            }
          ],
          yAxis: [
            {
              splitLine: {
                show: false
            },
            type: 'value'
            }
          ],
          series: [
            {
              type: 'bar',
              itemStyle: {
              normal: {
                color: function(params){
                let  colorList = ['#F75D5D','#59ED4F','#4C91E7'];
                return colorList[params.dataIndex];
              },
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#000'
                }
              }
            }
          },
          data: [10,20,30]
        }
      ]
    };
    barObj.setOption(option);

  }
  throttle=(fn,delay,debounce)=>{
    let currCall,lastCall=0,lastExec=0,timer=null,diff,scope,args;
    delay=delay||0;
    function exec() {
      lastExec = (new Date()).getTime();
      timer = null;
      fn.apply(scope, args || []);
    }
    const  cb=function () {
      currCall = (new Date()).getTime();
      scope = this;
      args = arguments;
      diff = currCall - (debounce ? lastCall : lastExec) - delay;
      clearTimeout(timer);
      if (debounce) {
        timer = setTimeout(exec, delay);
      }else{
        if (diff >= 0) {
          exec();
        }
        else {
          timer = setTimeout(exec, -diff);
        }
        lastCall = currCall;
      }
    }

  }
  handleRoam=(obj)=>{
    console.log(obj)
    this.throttle(this.renderEachProvince(), 0);
  }
  render() {
    const events={
      "click":this.handleClick,
      "geoRoam":this.handleRoam
    }
    return (
      <div  className="wrap" style={{width:"800px",height:"800px",border:"1px solid red",position:"relative"}}>
            <ReactEcharts onEvents={events}  option={this.state.option} style={{height:"800px"}} ref={(event) => { this.echarts_react= event}}/>
      </div>
    );
  }
}

export default ChinaWater;
