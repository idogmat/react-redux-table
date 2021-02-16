import {LoadAPI} from "./api";
import {filterElements, getSomeElements, toggleIsFetching} from "../store/reducer";

export const LoadSome=()=>(dispatch)=>{
    dispatch(toggleIsFetching(true))
   LoadAPI.getSomeUsers()
        .then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(getSomeElements(response))
        })

}
export const LoadMore=()=>(dispatch)=>{
    dispatch(toggleIsFetching(true))
    LoadAPI.getMoreUsers()
        .then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(getSomeElements(response))
        })
}
export const addNewRow=()=>(dispatch)=>{

}
export const filterColumn=(column,sortRow)=>(dispatch)=>{
    // console.log(column,sortRow)
    dispatch(filterElements(column,sortRow))

}
