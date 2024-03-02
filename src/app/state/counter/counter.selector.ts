import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";


export const selectCounterState = (state: AppState) => {
    console.log("state.counter", state.counter);
    return state.counter
}

export const selectCount = createSelector(
    selectCounterState,
    (state) => state.count
)