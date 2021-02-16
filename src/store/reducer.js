const GET_SOME_FORMS = 'GET_SOME_FORMS';
const FILTER_COLUMN = 'FILTER_COLUMN';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const CREATE_NEW_FORM ='CREATE_NEW_FORM';
let initialState = {
    formData:[],
    isFetching:false,
    sortRow:false
}
const formReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.formData = [...state.formData]


    switch (action.type) {
        case GET_SOME_FORMS: {
            stateCopy.formData = action.form;
            return stateCopy;

        }
        case TOGGLE_IS_FETCHING: {
            stateCopy.isFetching=action.isFetching
            return stateCopy;

        }
        case CREATE_NEW_FORM: {
            stateCopy.formData.unshift(action.newForm)
            return stateCopy;

        }
        case FILTER_COLUMN: {
            console.log(action.sortRow)
            let arr = new Array(stateCopy.formData)
            if (action.sortRow.sortRow){
                arr[0].sort((a, b) => b[action.column.column] < a[action.column.column] ? 1 : -1)
                stateCopy.sortRow=false
            }else{
                arr[0].sort((a, b) => b[action.column.column] > a[action.column.column] ? 1 : -1)
                stateCopy.sortRow=true
            }
            stateCopy.formData = arr[0]
            stateCopy.ifFetching=false

            return stateCopy
        }
        default:
            return state;
    }

}
export const getSomeElements=(form)=>{
    return ({type: GET_SOME_FORMS,form})
}
export const toggleIsFetching=(isFetching)=>{
    return ({type: TOGGLE_IS_FETCHING,isFetching})
}
export const filterElements=(column,sortRow)=>{
    return ({type: FILTER_COLUMN,column,sortRow})
}
export const createNewForm=(newForm)=>{
    return ({type: CREATE_NEW_FORM,newForm})
}
export default formReducer;
