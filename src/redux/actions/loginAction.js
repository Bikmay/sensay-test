const initialState = {login:'',password:''}

export default function loginAction(state=initialState,action){
    console.log(action);
    
    switch(action.type){
        case 'login':
            state.login = action.login;
            return state;
        case 'password':
            console.log('gog');
            
            console.log(state);
            state.password = action.password;
            console.log(state);
            
            return state;
        default:
            return state;   
    }
}
