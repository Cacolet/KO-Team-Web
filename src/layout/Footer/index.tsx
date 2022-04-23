import React,{FC} from "react";
import styles from './index.scss';

const Footer:FC = () =>{
    return (
        <div className={styles.footer}>
            <div>
                站点设计
            </div>
            <div>
                联系我们
            </div>
            <div>
                交流社区
            </div>
        </div>
    )
}

export default Footer
