import React,{FC} from "react";
import styles from './index.scss'


const Home:FC = ()=>{

    return (
        <div style={{position:"relative"}}>
            <div className={styles.video_txt} >
                <div>
                    <img className={styles.video_txt_img}
                          src="https://img.cdn.sugarat.top/mdImg/MTY1MDM3NjgxNzExMA==650376817110"
                          style={{opacity: 1}} />
                    <div className={styles.video_txt_line} style={{opacity: 1}}></div>
                    <p className={styles.font_14} style={{opacity: 1}}>团队服务平台</p>
                </div>
            </div>
            <video className={styles.video_source} autoPlay={true} loop={true} height="381" width="1920">
                <source src="https://storage.360buyimg.com/jdrd-misc/index/video/video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Home
