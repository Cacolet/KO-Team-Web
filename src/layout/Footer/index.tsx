import React, {FC} from "react";
import styles from './index.scss';

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.icon}>
                <div>
                    图标
                </div>
                <p>
                    KO Team 隶属于酷诺云上服务门户。专注于宣传和维护体验的设计探索与尝试
                </p>
                <p>
                    Copyright © 2022 KO-Team 版权所有
                </p>
            </div>
            <div className={styles.contact}>
                <div>
                    <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="5060" width="13" height="13">
                        <path
                            d="M121.92 1008.64c-7.68-0.64-18.816-3.2-27.84-6.528-23.424-8.512-42.688-22.848-57.664-42.816-3.008-4.032-5.696-7.744-5.888-8.256-0.256-0.512-1.152-2.112-1.984-3.52-1.6-2.56-5.12-9.536-6.912-13.76-12.224-28.544-13.12-63.488-2.368-91.84 0.64-1.792 1.216-3.456 1.216-3.648 0-0.704 6.208-13.184 8-16.192 0.832-1.408 1.728-3.008 1.984-3.52s1.664-2.56 3.072-4.608c1.472-1.984 3.072-4.224 3.584-4.992 5.376-7.744 20.032-21.632 28.8-27.264 1.6-1.024 3.008-2.048 3.2-2.24 0.448-0.576 8-4.672 12.48-6.848 12.096-5.76 21.184-8.704 34.24-11.008 10.624-1.856 31.168-1.856 41.6 0.064 16.704 3.008 28.992 7.68 44.16 16.576 5.696 3.328 13.44 8.896 13.44 9.6 0 0.384 0.32 0.64 0.704 0.64 0.448 0 1.408 0.64 2.176 1.472 0.768 0.768 3.392 3.328 5.824 5.632s5.44 5.44 6.656 6.912c1.216 1.536 2.688 3.2 3.264 3.84 3.136 3.2 12.288 17.664 15.104 23.744 5.248 11.392 8.64 22.016 10.88 34.24 1.6 9.024 1.664 31.936 0 40.64-2.624 14.08-6.016 24.512-11.84 36.16-2.752 5.696-8.448 14.784-11.456 18.56-0.832 1.088-2.432 3.072-3.52 4.48-1.152 1.408-5.376 5.824-9.408 9.792-9.408 9.216-9.28 9.088-10.176 9.088-0.448 0-0.768 0.256-0.768 0.512 0 0.576-5.504 4.608-6.336 4.608-0.32 0-0.896 0.448-1.344 0.96s-1.536 1.344-2.496 1.792c-0.896 0.512-2.816 1.536-4.224 2.368-14.464 8.32-32.384 14.08-48 15.424-7.744 0.64-20.224 0.64-28.16-0.064zM555.52 1008.64c-2.304-0.256-5.312-0.96-6.656-1.536s-2.88-1.024-3.392-1.024c-1.536 0-12.16-5.568-16.064-8.448-4.608-3.328-11.584-10.368-13.952-14.016-1.024-1.536-1.984-2.944-2.24-3.136-0.832-0.768-6.336-12.288-6.336-13.376 0-0.384-0.64-2.56-1.344-4.736-1.216-3.392-1.408-5.44-1.408-14.848 0-8.32 0.256-11.84 1.088-15.04 1.024-4.032 1.472-8.192 3.008-31.04 2.048-29.888-2.432-75.008-10.432-105.92-4.48-17.344-9.6-33.664-12.736-40.832-0.64-1.472-1.216-3.008-1.216-3.392s-0.384-1.6-0.896-2.688c-0.512-1.152-1.664-3.904-2.624-6.208-1.856-4.544-2.944-7.104-5.952-13.44-6.08-13.056-8.576-17.856-16.256-31.168-0.704-1.344-1.664-3.008-2.048-3.712s-1.792-2.944-3.136-4.992c-1.28-1.984-2.368-3.776-2.368-3.968 0-0.128-0.96-1.6-2.048-3.264-1.152-1.6-2.56-3.584-3.072-4.416-1.984-2.944-6.08-8.96-6.592-9.6-0.256-0.32-1.536-2.048-2.88-3.84-1.28-1.728-2.56-3.264-2.816-3.392-0.32-0.128-0.512-0.576-0.512-0.896 0-0.384-0.448-1.152-0.96-1.728-0.576-0.576-3.008-3.584-5.504-6.784-2.496-3.136-4.928-6.016-5.44-6.272s-0.896-0.832-0.896-1.216-0.384-1.024-0.896-1.408c-0.448-0.384-3.52-3.712-6.848-7.424-7.552-8.448-18.304-19.2-26.176-26.176-3.328-2.944-6.592-5.824-7.168-6.4-2.624-2.368-3.712-3.264-9.792-8.128-6.272-5.056-15.616-12.096-17.664-13.376-0.576-0.32-4.928-3.2-9.6-6.336-4.736-3.136-9.728-6.4-11.136-7.296s-3.328-2.112-4.288-2.816c-0.96-0.64-1.856-1.152-2.048-1.152-0.128 0-2.112-1.024-4.352-2.304-8.768-4.992-18.432-9.984-26.432-13.696-8.64-3.968-9.664-4.416-13.76-6.08-2.304-0.896-4.736-1.92-5.44-2.24s-2.432-1.024-3.84-1.536-4.544-1.664-7.04-2.56c-2.432-0.96-6.784-2.432-9.6-3.328s-6.72-2.176-8.64-2.816c-15.296-4.928-38.336-10.048-58.24-12.736-24.32-3.392-56.896-4.544-75.2-2.688-4.224 0.448-10.688 1.024-14.4 1.344s-8.32 1.024-10.24 1.536c-5.76 1.664-19.968 1.408-27.52-0.512-3.392-0.832-7.04-1.984-8.128-2.56-1.152-0.576-2.368-1.024-2.752-1.024-0.576 0-3.776-1.728-8.64-4.672-11.072-6.656-21.312-20.352-25.536-34.112-3.264-10.688-3.392-27.52-0.32-35.776 0.704-1.728 1.216-3.584 1.216-4.032 0-0.512 1.28-3.456 2.88-6.656 2.56-5.184 7.936-12.736 11.52-16.192 9.92-9.6 20.16-14.912 32.96-17.216 3.328-0.64 8.256-1.536 10.88-1.984 13.696-2.56 34.688-3.84 62.4-3.84 30.464 0 53.824 1.6 75.2 5.248 3.328 0.576 7.104 1.152 8.32 1.28 6.208 0.64 33.92 6.592 44.8 9.6 8.768 2.432 12.8 3.584 16.64 4.736 5.056 1.536 14.848 4.672 17.92 5.76 5.504 1.92 9.472 3.392 12.16 4.416 1.6 0.64 4.608 1.792 6.72 2.56 5.824 2.176 17.152 6.976 24.32 10.24 6.016 2.752 26.624 12.992 30.72 15.296 2.496 1.344 6.528 3.52 8.96 4.864 2.496 1.344 4.928 2.752 5.44 3.2s2.24 1.472 3.84 2.304 3.904 2.176 5.12 3.008c1.216 0.768 2.688 1.728 3.2 2.048s2.048 1.344 3.392 2.24 2.56 1.6 2.688 1.6c0.32 0 6.272 3.968 6.72 4.416 0.192 0.256 0.832 0.704 1.408 1.024 6.656 3.84 42.816 31.104 44.672 33.664 0.192 0.256 1.6 1.472 3.2 2.816 6.976 5.76 14.016 12.416 26.88 25.28 13.44 13.44 18.304 18.688 25.984 27.84 2.048 2.496 4.096 4.8 4.48 5.12 1.536 1.344 11.136 13.696 11.136 14.336 0 0.32 0.256 0.704 0.576 0.832 0.512 0.192 7.168 8.832 11.072 14.464 0.832 1.152 1.792 2.496 2.112 2.88 1.088 1.28 14.4 21.44 14.4 21.76 0 0.192 1.088 2.048 2.432 4.096 3.264 5.12 3.392 5.376 7.744 12.992 2.048 3.712 4.544 8 5.44 9.6s4.672 8.96 8.32 16.32c7.488 15.232 9.856 20.288 13.184 28.48 0.832 1.92 1.856 4.416 2.24 5.44 1.664 3.904 4.992 12.8 7.936 20.992 2.816 7.808 3.776 10.56 5.184 15.168 5.312 17.344 5.952 19.648 10.176 36.8 5.376 22.08 10.496 55.68 11.648 76.48 0.256 5.824 0.704 12.288 0.896 14.4 0.64 6.656 0.448 39.424-0.32 53.248-0.768 13.76-2.24 28.288-3.2 32.192-0.32 1.216-1.088 5.44-1.6 9.28-2.496 16.96-10.624 30.72-24.32 41.28-4.608 3.584-11.968 7.296-19.072 9.6-5.248 1.728-6.912 1.984-15.488 2.24-5.248 0.128-11.456 0-13.76-0.32z"
                            p-id="5061" fill="#ffffff"></path>
                        <path
                            d="M930.88 1008.64c-8.384-1.216-19.904-6.144-27.008-11.648-1.92-1.472-5.248-4.416-7.296-6.592-5.376-5.44-5.696-5.824-5.696-6.336 0-0.256-0.512-1.024-1.152-1.664-1.472-1.6-6.08-10.816-7.68-15.36-0.704-1.92-1.728-6.656-2.368-10.56-1.152-7.168-1.152-9.856 0.256-25.6 1.024-11.648 1.472-51.136 0.768-72.64-1.664-55.232-9.728-109.696-24.512-165.76-1.536-5.888-4.8-17.28-7.488-25.92-1.984-6.656-8.96-27.648-10.304-31.36-0.64-1.728-1.792-4.8-2.496-6.72-5.248-14.464-8.832-23.552-17.024-42.56-5.312-12.288-20.16-42.688-26.304-53.76-1.536-2.816-3.392-6.272-4.096-7.68s-1.792-3.392-2.496-4.48c-0.64-1.024-1.792-3.008-2.56-4.288-0.704-1.344-1.984-3.52-2.688-4.8-2.432-4.224-4.672-7.936-12.288-20.352-0.448-0.704-2.432-3.84-4.416-6.912-2.048-3.136-3.712-5.824-3.712-5.952 0-0.192-1.088-1.792-2.368-3.648-1.344-1.856-2.688-3.84-3.072-4.416-2.24-3.648-10.88-16-11.584-16.576-0.512-0.384-0.896-1.152-0.896-1.6 0-0.512-0.192-0.896-0.512-0.896-0.256 0-1.152-1.152-2.048-2.56s-1.792-2.56-2.048-2.56c-0.32 0-0.512-0.32-0.512-0.704 0-0.576-1.92-3.136-6.784-9.088-0.512-0.576-0.896-1.28-0.896-1.536 0-0.192-0.448-0.832-0.96-1.408-0.576-0.576-5.248-6.336-10.432-12.864-9.728-12.288-10.624-13.376-12.352-15.232-0.576-0.576-2.688-3.072-4.8-5.568-4.48-5.376-6.464-7.616-8.576-9.92-0.896-0.96-4.48-4.864-7.936-8.704-8.192-8.896-36.608-37.376-44.48-44.416-3.264-3.008-6.784-6.144-7.744-7.04-2.752-2.56-5.76-5.184-10.368-9.088-2.368-1.984-4.736-4.032-5.248-4.544-0.576-0.512-4.16-3.52-8.064-6.592-3.84-3.136-7.04-5.888-7.04-6.144s-0.384-0.512-0.768-0.512c-0.448 0-1.728-0.768-2.752-1.792-2.944-2.624-23.936-18.624-29.504-22.4-0.704-0.448-2.624-1.792-4.416-3.072-6.464-4.544-27.904-18.816-28.224-18.816-0.128 0-1.664-0.96-3.328-2.176-1.728-1.152-3.968-2.624-4.992-3.2s-3.008-1.792-4.416-2.624c-1.408-0.896-4.352-2.688-6.592-3.968-2.24-1.344-4.544-2.752-5.12-3.072-0.576-0.384-2.496-1.472-4.288-2.432-1.728-0.96-4.352-2.432-5.76-3.328-1.408-0.832-3.392-1.984-4.48-2.496-1.024-0.576-5.376-2.88-9.6-5.184-14.528-7.808-37.376-18.944-51.2-24.96-3.84-1.664-8.192-3.52-9.6-4.16-2.368-1.088-4.288-1.856-12.288-5.056-1.728-0.64-4.672-1.856-6.592-2.624-7.104-2.88-9.344-3.712-20.032-7.552-6.656-2.368-24.96-8.448-31.488-10.432-2.432-0.768-6.08-1.92-8-2.496-3.456-1.088-8.384-2.496-18.368-5.184-2.752-0.704-6.912-1.856-9.216-2.56-2.304-0.64-4.672-1.216-5.312-1.216s-3.2-0.576-5.696-1.216c-11.136-2.944-32.64-7.36-50.048-10.24-33.984-5.632-64.512-8.576-100.8-9.728-21.44-0.64-28.032-0.576-50.88 0.384-14.4 0.576-28.224 1.216-30.72 1.408-13.696 1.024-29.632-3.904-40.96-12.608-8-6.144-12.864-12.096-17.792-21.76-8.832-17.088-8.704-39.36 0.32-57.024 2.56-4.992 5.632-9.536 6.336-9.536 0.32 0 0.576-0.32 0.576-0.704s1.984-2.688 4.416-5.12 4.736-4.416 5.12-4.416 0.704-0.256 0.704-0.576c0-0.704 4.544-3.776 9.472-6.272 11.2-5.76 21.76-7.424 53.248-8.576 25.92-0.96 82.368-0.32 97.6 1.024 6.016 0.512 13.312 1.152 16.32 1.28 19.2 1.216 61.248 6.976 86.72 11.904 21.184 4.16 35.52 7.296 46.208 10.176 2.56 0.704 5.12 1.28 5.76 1.28 0.576 0 2.944 0.576 5.248 1.216 2.304 0.704 6.528 1.92 9.344 2.688s6.848 1.856 8.96 2.496 6.144 1.792 8.96 2.56c5.824 1.664 11.968 3.52 16.64 5.12 1.792 0.64 7.232 2.432 12.16 4.032 9.408 3.136 15.04 5.056 22.4 7.808 2.496 0.896 5.632 2.048 7.04 2.496 2.368 0.832 4.096 1.536 12.48 4.864 1.792 0.704 4.672 1.856 6.4 2.56 1.792 0.704 4.736 1.856 6.592 2.624 1.792 0.768 4.416 1.728 5.76 2.24 1.28 0.512 2.88 1.152 3.52 1.472 1.28 0.704 5.312 2.496 15.168 6.784 6.592 2.88 20.416 9.28 22.912 10.624 2.176 1.152 3.392 1.792 7.168 3.584 2.112 1.024 4.48 2.24 5.248 2.624 0.832 0.448 2.048 1.024 2.752 1.408 0.704 0.32 1.856 0.96 2.56 1.28 3.072 1.536 4.224 2.112 10.368 5.376 3.648 1.92 7.872 4.224 9.472 5.12s4.032 2.24 5.44 2.944 3.584 1.92 4.8 2.624c1.216 0.768 3.84 2.24 5.76 3.328 1.92 1.024 4.224 2.368 5.12 2.944 0.896 0.512 2.176 1.344 2.88 1.728 3.584 1.984 6.4 3.648 11.2 6.592 2.88 1.792 5.312 3.264 5.44 3.264 0.064 0 2.752 1.664 5.888 3.648 3.072 2.048 6.144 4.032 6.72 4.352 0.576 0.384 2.368 1.6 3.968 2.752 1.664 1.088 3.136 2.048 3.264 2.048 0.512 0 6.4 4.096 6.592 4.608 0.128 0.256 0.512 0.512 0.768 0.512 0.32 0 1.92 0.96 3.584 2.048 1.6 1.152 3.584 2.56 4.416 3.072 3.904 2.624 9.024 6.144 9.728 6.72 0.448 0.32 3.392 2.496 6.592 4.8 9.472 6.784 17.984 13.184 31.872 24 0.448 0.32 1.344 1.088 1.92 1.664 0.576 0.512 3.136 2.496 5.568 4.416 2.496 1.92 4.608 3.648 4.8 3.84s1.92 1.6 3.84 3.2 3.648 3.008 3.84 3.2 2.176 1.856 4.48 3.776 4.8 4.096 5.568 4.8c0.704 0.768 2.56 2.368 4.096 3.584 1.472 1.216 3.136 2.688 3.712 3.264s4.224 3.84 8.064 7.296c17.92 16.064 46.912 45.312 63.68 64.32 3.264 3.712 6.656 7.616 7.68 8.64 0.96 1.088 3.264 3.776 5.12 6.08s3.712 4.48 4.16 4.8c2.944 2.56 39.36 49.6 39.36 50.88 0 0.32 0.256 0.64 0.512 0.768 0.512 0.192 1.984 2.24 8.256 11.328 1.152 1.6 2.304 3.264 2.56 3.584 0.448 0.512 6.72 9.984 15.552 23.36 0.32 0.512 1.344 2.048 2.24 3.392s1.6 2.56 1.6 2.688 1.088 1.92 2.432 3.968 2.688 4.16 2.88 4.672c0.256 0.512 1.344 2.24 2.368 3.84s2.176 3.456 2.56 4.16c0.32 0.704 1.28 2.368 2.048 3.648 1.856 2.944 10.368 17.792 11.008 19.072 0.256 0.512 1.152 2.112 1.984 3.52s2.24 3.84 3.008 5.44c0.832 1.6 2.752 5.184 4.288 8 3.072 5.632 16.064 31.488 19.136 38.08 1.024 2.304 3.072 6.656 4.544 9.728 1.408 3.072 2.624 5.888 2.624 6.272s0.384 1.344 0.896 2.112c0.832 1.28 2.368 4.864 5.632 12.928 0.704 1.792 1.792 4.352 2.432 5.76s1.664 4.032 2.432 5.76c0.704 1.792 1.856 4.672 2.56 6.4 0.704 1.792 1.92 4.928 2.688 7.04 0.832 2.112 1.92 5.12 2.56 6.72s1.792 4.608 2.56 6.72 1.92 5.312 2.56 7.04c1.408 3.648 10.88 32.512 12.736 38.72 5.312 17.6 8.768 30.016 12.8 46.592 0.64 2.688 1.728 6.976 2.304 9.408 0.64 2.496 1.344 5.76 1.6 7.36s0.896 4.736 1.472 7.04c5.504 23.04 11.648 61.888 15.104 96 3.264 31.232 3.584 40 3.584 89.28 0 34.304-0.256 48.704-0.832 54.08-0.448 4.032-1.088 10.24-1.408 13.76-0.256 3.52-0.96 7.68-1.536 9.216s-1.024 3.2-1.024 3.648c0 1.472-5.12 11.776-7.936 15.808-3.2 4.672-10.56 12.224-14.464 14.848-1.6 1.024-3.008 2.112-3.2 2.304-0.576 0.768-12.032 6.336-12.928 6.336-0.512 0-2.56 0.576-4.608 1.344-2.944 1.024-5.76 1.344-13.44 1.536-5.312 0.128-11.392 0-13.504-0.32z"
                            p-id="5062" fill="#ffffff"></path>
                    </svg>
                    <span>联系我们</span>
                </div>
                <p>
                    使用反馈:
                    cacolet@foxmail.com
                </p>
                <p>
                    合作:
                    cacolet@foxmail.com
                </p>
            </div>
            <div className={styles.communication}>
                <div>
                    <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2073" width="15" height="15">
                        <path
                            d="M903.198086 627.098671c-5.899987-2.699994-9.39998-8.899981-8.799981-15.299967 1.099998-11.799975 1.599997-23.69995 1.599996-35.799925 0-133.499717-68.099856-251.099468-171.499636-319.899322-5.199989-3.499993-7.999983-9.699979-6.999985-15.899966 1.799996-11.599975 2.599994-23.49995 2.399994-35.699924C718.198478 93.399802 628.198669 2.699994 517.098904 0.1c-113.799759-2.799994-208.899557 86.999816-212.999548 200.199576-0.499999 13.599971 0.299999 26.999943 2.299995 39.899915 0.999998 6.299987-1.799996 12.499974-6.999985 15.999966C196.099584 324.999311 127.999729 442.499062 127.999729 575.998779c0 12.099974 0.599999 23.999949 1.699996 35.799925 0.599999 6.499986-2.899994 12.599973-8.799981 15.299967C49.499895 660.098601 0 732.298448 0 815.998271c0 114.899757 92.099805 207.39956 206.999561 207.999559 66.599859 0.299999 125.899733-30.599935 164.199652-78.999833 4.199991-5.299989 11.199976-7.299985 17.599963-5.199989C427.499094 952.897981 468.899006 959.997966 511.998915 959.997966s84.499821-7.099985 123.199739-20.199958c6.399986-2.199995 13.399972-0.1 17.599963 5.199989 38.299919 48.399897 97.599793 79.299832 164.199652 78.999833 114.899757-0.599999 206.999561-93.099803 206.999561-207.999559 0-83.699823-49.499895-155.89967-120.799744-188.8996z m-71.699848-33.799928c-0.399999 8.199983-7.199985 14.699969-15.399967 14.699969h-0.1c-114.899757 0-207.999559 93.099803-207.999559 207.999559 0 16.499965 1.899996 32.499931 5.599988 47.899898 1.999996 8.299982-2.799994 16.699965-10.999977 19.09996-29.199938 8.599982-59.499874 12.999972-90.499808 12.999972s-61.29987-4.399991-90.499808-12.999972c-8.199983-2.399995-12.999972-10.799977-10.999977-19.09996 3.599992-15.399967 5.599988-31.399933 5.599988-47.899898 0-114.899757-93.099803-207.999559-207.999559-207.999559h-0.1c-8.199983 0-14.999968-6.399986-15.399967-14.699969-0.299999-5.799988-0.499999-11.499976-0.499999-17.299964 0-43.199908 8.399982-85.09982 25.099947-124.499736 16.099966-38.099919 39.199917-72.299847 68.599854-101.699784 9.999979-9.999979 20.599956-19.299959 31.699933-27.799941 7.299985-5.599988 17.699962-3.899992 22.899951 3.599992C377.799199 380.099195 440.699066 415.999118 511.998915 415.999118s134.199716-35.899924 171.699636-90.499808c5.199989-7.499984 15.599967-9.199981 22.899952-3.599992 11.099976 8.499982 21.699954 17.799962 31.699932 27.799941 29.399938 29.399938 52.499889 63.599865 68.599855 101.699784C823.598255 490.89896 831.998237 532.798871 831.998237 575.998779c0 5.799988-0.1 11.599975-0.499999 17.299964z"
                            p-id="2074" data-spm-anchor-id="a313x.7781069.0.i0" className="selected"
                            fill="#ffffff"></path>
                    </svg>
                    <span className={styles.title_text}>交流协作</span>
                </div>
                <ul>
                    <li>
                        <a href="https://github.com">
                            <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="5885" width="15" height="15">
                                <path
                                    d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
                                    p-id="5886" fill="#ffffff"></path>
                            </svg>
                            <span>
                            github
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg  viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="6707" width="15" height="15">
                                <path
                                    d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m259.168-568.896h-290.752a25.28 25.28 0 0 0-25.28 25.28l-0.032 63.232c0 13.952 11.296 25.28 25.28 25.28h177.024a25.28 25.28 0 0 1 25.28 25.28v12.64a75.84 75.84 0 0 1-75.84 75.84h-240.224a25.28 25.28 0 0 1-25.28-25.28v-240.192a75.84 75.84 0 0 1 75.84-75.84h353.92a25.28 25.28 0 0 0 25.28-25.28l0.064-63.2a25.312 25.312 0 0 0-25.28-25.312H417.184a189.632 189.632 0 0 0-189.632 189.6v353.952c0 13.952 11.328 25.28 25.28 25.28h372.928a170.656 170.656 0 0 0 170.656-170.656v-145.376a25.28 25.28 0 0 0-25.28-25.28z"
                                    p-id="6708" fill="#ffffff"></path>
                            </svg>
                            <span>
                            gitee
                        </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
