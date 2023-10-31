import style from './Header.module.scss'
import { NamespaceApp } from 'shared/ui/namespace'
import { styledText, Text } from 'shared/ui/text'

export const Header = () => (
    <div className={style.header}>
        <NamespaceApp/>
        <Text className={style.title} styled={styledText.TITLE}>
            Создавай и проходи тесты!
        </Text>
    </div>
)
