import   * as t from "./test.reducer";
import { ActionReducerMap } from "../../../../node_modules/@ngrx/store";

export interface ProductTest {
    data : t.TestState
}
export const reducers : ActionReducerMap<ProductTest> = {
    data : t.reducer
}