import React, {FC} from "react";
import styles from './index.scss'
import classnames from "classnames";
const About: FC = () => {
    return (
        <div className={styles.about}>
            <div className="TeamIntro">
                <div className={styles.teamWrap}>
                    <div className={styles.bannerWrap}></div>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <span className={styles.text}>我们是</span>
                        </div>
                        <div className={styles.cardContent}>
                            <p className={styles.font_14}>
                                KO Team
                                隶属于酷诺云上服务门户。专注于宣传和维护体验的设计探索与尝试，商业价值与用户体验的平衡；为计算机科学学院部分团队业务条线提供设计支持，包括线上基础产品体验设计、活动体验设计、品牌创意设计、新媒体传播设计、内外部系统产品设计、企业文化设计传播以及体验创新研究等。同时在设计广度与深度上打造核心能力，将设计能力在组织内部及外部完成规模化的输出与赋能，形成商业组织独有的设计体系。</p>
                            <p className={styles.font_14}>
                                KO Team由云上西柚团队设计部及酷诺软件事业部设计组成，团队共20+成员组成，团队专业领域涉及用户研究、交互设计、视觉设计后端开发以及前端开发，分布于各大职场</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.w}>
                <div className={styles.jobPos}>
                    <div className={styles.teamTitle}>位置概览</div>
                    <div className={styles.posList}>
                        <div className={styles.posItem}>
                            <i className={styles.posIcon}></i>
                            <div className={classnames(styles.posName,styles.font_14)}>云上西柚</div>
                            <div className={classnames(styles.posName,styles.font_14)}>成都校区明理楼C栋1010</div>
                        </div>
                        <div className={styles.posItem}>
                            <i className={styles.posIcon}></i>
                            <div className={classnames(styles.posName,styles.font_14)}>酷诺软件</div>
                            <div className={classnames(styles.posName,styles.font_14)}>成都校区明理楼C栋1012</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
