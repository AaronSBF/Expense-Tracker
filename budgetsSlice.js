import {createSlice} from '@reduxjs/toolkit'
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({ 
  name: "budgets",
  initialState: initialState,
  reducers:{ 
    editBudget: (state, action)=>{ 
   let cat =  state.map(budget=>{ 
     if(budget.category===action.payload.category){ 
       return action.payload
     }
     return budget;
   })
   return cat;

    /*const newBudgets = state.map(budget => {
        if (budget.category === action.payload.category) {
          return action.payload;
        }
        return budget;
      })*/
          }
  }
})




export const selectBudgets = (state) => state.budgets;
export default budgetsReducer;

export budgetsSlice.actions;
export default budgetsSlice.reducer;