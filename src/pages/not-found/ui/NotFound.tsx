import style from "./NotFound.module.scss";
import {Page} from "shared/ui/page";
import {styledText, Text} from "shared/ui/text";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {pathRoutes} from "shared/config/routes";
import {Button, typedButton} from "shared/ui/button";

const NotFound = () => {
    const navigate = useNavigate();

    const navigateHandler = useCallback(() => {
        navigate(pathRoutes.main.name);
    }, [])
    return (
        <Page className={style.page}>
            <Text styled={styledText.ERROR}>Not found page</Text>
            <Button onClick={navigateHandler} typed={typedButton.DEFAULT}>Перейти на главную</Button>
        </Page>
    );
};

export default NotFound;