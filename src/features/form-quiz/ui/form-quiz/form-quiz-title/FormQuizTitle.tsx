import style from './FormQuizTitle.module.scss';

import {useHandlersQuizTitle} from "features/form-quiz/lib/hooks/useHandlersQuizTitle.tsx";
import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";
import {quizDescriptionSelector, quizIconSelector, quizNameSelector, quizTagsSelector, quizThemeSelector
} from "../../../model/selectors/form-quiz-selectors.ts";

import {displayPanel, Panel, styledPanel, typedPanel} from "shared/ui/panel";
import {Image, imageStyle} from "shared/ui/image";
import {enumDesign, Field} from "shared/ui/field";

export const FormQuizTitle = () => {
    const quizIcon = useAppSelector(quizIconSelector);
    const quizName = useAppSelector(quizNameSelector);
    const quizTheme = useAppSelector(quizThemeSelector);
    const quizTags = useAppSelector(quizTagsSelector);
    const quizDescription = useAppSelector(quizDescriptionSelector);

    const { updateQuizNameHandler,
            updateQuizTagsHandler,
            updateQuizThemeHandler,
            updateQuizDescriptionHandler,
            updateQuizIconHandler } = useHandlersQuizTitle();

    return (
        <div className={style.dsg}>
            <Panel display={displayPanel.ROW} className={style.quiz_card} styled={styledPanel.SHADOW_PANEL} typed={typedPanel.ROUNDED}>
                <Image styled={imageStyle.RECTANGLE} className={style.icon} alt="icon" src={quizIcon}/>
                <div className={style.form}>
                    <Field
                        design={enumDesign.LINE} placeholderColorScheme="theme"
                        center={true}
                        value={quizName} onChange={updateQuizNameHandler}
                        type="text"
                        className={style.field}
                        placeholder="название"/>
                    <Field
                        design={enumDesign.LINE} placeholderColorScheme="theme"
                        center={true}
                        value={quizIcon} onChange={updateQuizIconHandler}
                        type="text"
                        className={style.field}
                        placeholder="url icon"/>
                    <Field
                        design={enumDesign.LINE}
                        placeholderColorScheme="theme"
                        center={true}
                        value={quizTheme} onChange={updateQuizThemeHandler}
                        type="text"
                        className={style.field}
                        placeholder="тема"/>
                    <Field
                        design={enumDesign.LINE}
                        placeholderColorScheme="theme"
                        center={true}
                        value={quizDescription} onChange={updateQuizDescriptionHandler}
                        multiline={true}
                        type="text"
                        className={style.multiline_field}
                        placeholder="описание"/>
                    <Field
                        design={enumDesign.LINE}
                        placeholderColorScheme="theme"
                        center={true}
                        value={quizTags} onChange={updateQuizTagsHandler}
                        type="text"
                        className={style.field}
                        placeholder="теги"/>
                </div>
            </Panel>
        </div>
    );
};