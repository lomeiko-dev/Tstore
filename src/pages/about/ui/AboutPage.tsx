import style from './AboutPage.module.scss'
import { Page } from 'shared/ui/page'
import { styledText, Text } from 'shared/ui/text'
import content from '../config/content.json'

const AboutPage = () => (
    <Page className={style.page}>
        <Text className={style.title} styled={styledText.TITLE}>О сайте</Text>
        <Text className={style.description} styled={styledText.DESCRIPTION}>{content.about}</Text>
    </Page>
)

export default AboutPage
