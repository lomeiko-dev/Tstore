import ReactDOM from 'react-dom/client'
import {App} from "app/App.tsx";
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/store/ui/StoreProvider.tsx";
import {AuthenticateProvider} from "app/providers/authenticate/ui/AuthenticateProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <AuthenticateProvider>
                <App/>
            </AuthenticateProvider>
        </StoreProvider>
    </BrowserRouter>
)
