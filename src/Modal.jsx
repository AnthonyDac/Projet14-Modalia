import React from 'react';
import './Modal.css';

class Modalia extends React.Component {
    render() {
        const { show, position, title, commentary, backgroundColor, titleColor, commentaryColor } = this.props;
        let contentClasses = `modal-content ${position}`;
        let modalClasses = `modal ${position || 'center'}`;
        const defaultColor = '#282828';
        const defaultTitleColor = '#fff';
        const defaultCommentaryColor = 'rgba(255, 255, 255, 0.8)';

        return (
            <>
                {show ? <div className={modalClasses}>
                    <div className={contentClasses} style={{ background: backgroundColor ? backgroundColor : defaultColor }}>
                        <p style={{ color: titleColor ? titleColor : defaultTitleColor }} className='title'>{title}</p>
                        {commentary ? <p className='commentary' style={{ color: commentaryColor ? commentaryColor : defaultCommentaryColor }}>{commentary}</p> : null}
                        <span className="close" onClick={() => window.dispatchEvent(new CustomEvent('modalClose'))}>
                            &times;
                        </span>
                    </div>
                </div> : null}
            </>
        );
    }
}

export default Modalia;