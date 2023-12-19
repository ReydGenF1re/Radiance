import React from 'react';
import ReactDOM, {createRoot} from "react-dom/client";
import MainApp from "./App";

it('renders without crashing', function () {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<MainApp/>);
    root.unmount();
});
