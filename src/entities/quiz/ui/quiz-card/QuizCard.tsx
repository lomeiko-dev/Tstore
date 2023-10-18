import React from "react";
import style from "./QuizCard.module.scss";
import {IQuizTitle} from "../../model/types/quiz-scheme.ts";
import {Panel, styledPanel, typedPanel} from "shared/ui/panel";
import {Image, imageStyle} from "shared/ui/image";
import {styledText, Text} from "shared/ui/text";
import {Button, typedButton} from "shared/ui/button";

interface IQuizCardProps extends Omit<IQuizTitle, 'id'>{
    onClickQuiz: () => void
}

export const QuizCard: React.FC<IQuizCardProps> = (props) => {
    const {
        tags,
        theme,
        name,
        description,
        icon,
        onClickQuiz
    } = props;

    return (
        <Panel className={style.card} styled={styledPanel.SHADOW_PANEL} typed={typedPanel.ROUNDED}>
            <Image className={style.icon} alt="icon quiz" src={icon} styled={imageStyle.RECTANGLE}/>
            <Text className={style.name} styled={styledText.TITLE}>{name}</Text>
            <Text styled={styledText.DESCRIPTION}>{theme}</Text>
            <Text className={style.description} styled={styledText.SUBTITLE}>{description}</Text>
            <Text className={style.tags} styled={styledText.DESCRIPTION}>{tags}</Text>
            <Button className={style.btn} typed={typedButton.DEFAULT} onClick={onClickQuiz}>Перейти</Button>
        </Panel>
    );
};