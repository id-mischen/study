

const MI_ADD = ()=>{
    return{type:"ADD"}
};

const MI_DEL = ()=>{
    return{type:"DEL"}
};

const MI_AJAX = (params)=>{
    return async (dispatch)=>{
        params.cd('ok');
        dispatch({type:"ADD"})
    }
};

export  {MI_ADD,MI_AJAX,MI_DEL} ;