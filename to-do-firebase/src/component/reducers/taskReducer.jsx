import { toast } from 'react-toastify'
import * as Type from  '../action/constant'




const taskReducer = (state = {} , action )=>{
    switch(action.type){
        case Type.ADD_TASK:
            toast.success('Added a task success!')
            // console.log('Added a task success!')
            return state
        
        case Type.ADD_TASK_ERR:
            toast.warn('An error occurred!' ,{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return state
        case Type.REMOVE_TASK:
            
            toast.success('Removed a task success!')
            // console.log('Removed a task success!')
            return state
        case Type.REMOVE_TASK_ERR:
            toast.warn('An error occurred!' ,{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return state
    
        default : 
            return state
    }
}

export default taskReducer