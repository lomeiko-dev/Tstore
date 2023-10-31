import styleQuiz from '../QuizCard.module.scss'
import styleSkeleton from './QuizSkeleton.module.scss'

import { Panel, typedPanel } from 'shared/ui/panel'

export const QuizSkeleton = () => (
    <Panel typed={typedPanel.ROUNDED} className={styleQuiz.card}>
        <Panel typed={typedPanel.ROUNDED} className={styleQuiz.icon} isAnimLoader={true}/>
        <Panel typed={typedPanel.ROUNDED} className={styleSkeleton.name} isAnimLoader={true}/>
        <Panel typed={typedPanel.ROUNDED} className={styleSkeleton.theme} isAnimLoader={true}/>
        <Panel typed={typedPanel.ROUNDED} className={styleSkeleton.description} isAnimLoader={true}/>
        <Panel typed={typedPanel.ROUNDED} className={styleSkeleton.button} isAnimLoader={true}/>
    </Panel>
)
