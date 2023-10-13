import "./styles/index.scss";
import {Routing} from "./providers/routing";
import {useTheme} from "shared/lib/hooks/useTheme.tsx";
import classNames from "classnames";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <Routing/>
        </div>
    );
};