import React, { memo } from 'react';
import { Developer } from '../../constants/constants';
import styles from './style.module.css';
import Links from '../../assets/links/links';
import image from '../../assets/images/shivam_gupta.jpeg';

const AboutDeveloper = () => {
    return (
        <div align="center">
            <img className={styles.mainImg} src={image} />
            <h3>
                {Developer.HEADING}
                <img className={styles.icon} src={Links.HiGif} />
            </h3>
            <p>{Developer.ABOUT}</p>
            <h4>
                {Developer.REACH_ME}
                <a href={Links.Developer.mailTo}>{Developer.USERNAME}</a>
            </h4>
            <h4>
                {Developer.DOWNLOAD}
                <a href={Links.Developer.resume}>here</a>.</h4>
            <div className={styles.bottomContainer} >
                {
                    Links.Developer.social_medias.map(social_media => {
                        return (
                            <a className={styles.stdMargin} key={social_media.url} href={social_media.url}>
                                <img alt={social_media.description} width="22px" src={social_media.icon} />
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default memo(AboutDeveloper);