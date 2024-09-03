import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{id : 1 , text : "hello"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },

        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },

        // updateTodo : (state,action) => {
        //     state.todos.map((todoele) => {
        //         if(todoele.id == action.payload.id){
        //          todoele.text = action.payload
        //         }
        //     })
        // }

    }
})


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer
