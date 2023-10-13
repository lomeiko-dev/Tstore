import ReactDOM from 'react-dom/client'

import {App} from "app/App.tsx";
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/store";
import {AuthenticateProvider} from "app/providers/authenticate";
import {ThemeProvider} from "app/providers/theme";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <AuthenticateProvider>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </AuthenticateProvider>
        </StoreProvider>
    </BrowserRouter>
)
