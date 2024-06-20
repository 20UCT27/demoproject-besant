
export var initialState ={
    userName :"Admin",
    Password :"12345"
}

export function ValuesReducer(state,action){
    switch (action.type){
        case "VALUES" :
            initialState={
                ...initialState,userName:action.userName,Password:action.Password
            }
            return initialState
        default:
            return initialState
    }
     

}