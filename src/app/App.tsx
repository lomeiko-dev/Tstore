import "./styles/index.scss";
import {Routing} from "./providers/routing";

export const App = () => {
    return (
        <div className="app light">
            <Routing/>
        </div>
    );
};