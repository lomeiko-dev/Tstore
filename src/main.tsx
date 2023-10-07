import ReactDOM from 'react-dom/client'

import {App} from "app/App.tsx";
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/store";
import {AuthenticateProvider} from "app/providers/authenticate";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <AuthenticateProvider>
                <App/>
            </AuthenticateProvider>
        </StoreProvider>
    </BrowserRouter>
)
