import React from "react";
import DiaryPage from "./pages/diaryPage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <DiaryPage />
        </Provider>
    );
}

export default App;
