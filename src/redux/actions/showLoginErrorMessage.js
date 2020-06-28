const initialState= {loginErrorMessage:'561'}

export default function showLoginErrorMessage(state=initialState,action){
    switch(action.type){
        case 'show':
            console.log('reducer'+ action.loginErrorMessage);
            state.showLoginErrorMessage.loginErrorMessage = action.loginErrorMessage;
            return state;
        case 'hide':
            console.log(state);
            state.showLoginErrorMessage.loginErrorMessage ="";
            return state;
        default:
            return state;   
    }
}