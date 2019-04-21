const defaultState={
    inputValue:"Hello Redux",
    data:[
                '长风破浪会有时',
                '流萤度高阁',
                '老僧已死成新塔',
                '坏壁无由见旧题',
                '恰似飞鸿踏雪泥',
        ]
}

const todoReducer=(state=defaultState,action={})=>{
    return state
};
export default todoReducer;