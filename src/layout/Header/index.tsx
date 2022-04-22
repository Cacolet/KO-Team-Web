import React, {FC} from "react";
import {Link} from "react-router-dom";
import styles from './index.scss'

const Header:FC = () => {
    return (
        <div>
            <div className={styles.top}></div>
            <div className={styles.header_F}>

                <div className={styles.header}>
                    <div className={styles.avator}>
                        图标
                        <img src="" alt="" />
                    </div>
                    <div className={styles.router}>
                        <Link to="/">首页</Link>
                        <Link to="/blog">技术沙龙</Link>
                        <Link to="/manage">开放平台</Link>
                        <Link to="/join">加入我们</Link>
                        <Link to="/about">关于团队</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
