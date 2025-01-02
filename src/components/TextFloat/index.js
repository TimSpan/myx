import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';



export default function TextFloat({ text, height }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);  // 使用 useRef 替代字符串 ref

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            style={{ height: height ? height : '40px' }}
            ref={ref}  // 绑定 ref 到 DOM 元素
            className={clsx(styles.textContainer, { [styles.visible]: isVisible, })}
        >
            {text ? text : 'Welcome to My Site'}
         
        </div>
    );
}
