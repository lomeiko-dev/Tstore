import style from './PageLoader.module.scss'
import { Loader } from 'shared/ui/loader'

export const PageLoader = () => (
    <div className={style.container}>
        <Loader/>
    </div>
)
