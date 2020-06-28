const initialState= {errorCallbackLoginServer:'561'}

export default function setErrorMessage(state=initialState,action){
    if(action.type ==='loginError'){
        state.errorCallbackLoginServer = action.text;
        return state;
    }
   return state;
}