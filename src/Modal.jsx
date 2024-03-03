/**
 * Modalia est un composant de modale personnalisable.
 * 
 * @component
 * @example
 * // Pour utiliser ce composant, vous pouvez faire comme suit :
 * <Modalia 
 *   show={true} 
 *   position="center" 
 *   title="Titre de la modale" 
 *   commentary="Commentaire de la modale" 
 *   backgroundColor="#282828" 
 *   titleColor="#fff" 
 *   commentaryColor="rgba(255, 255, 255, 0.8)"
 * />
 * 
 * @param {Object} props - Les props que vous pouvez passer au composant Modalia.
 * @param {boolean} props.show - Si true, la modale sera affichée. Sinon, elle sera cachée.
 * @param {string} [props.position=center] - La position de la modale. Par défaut, elle est centrée.
 * @param {string} props.title - Le titre de la modale.
 * @param {string} [props.commentary] - Le commentaire de la modale. Il est facultatif.
 * @param {string} [props.backgroundColor=#282828] - La couleur d'arrière-plan de la modale. Par défaut, elle est #282828.
 * @param {string} [props.titleColor=#fff] - La couleur du titre de la modale. Par défaut, elle est #fff.
 * @param {string} [props.commentaryColor=rgba(255, 255, 255, 0.8)] - La couleur du commentaire de la modale. Par défaut, elle est rgba(255, 255, 255, 0.8).
 * 
 * @returns {React.Component} Le composant Modalia.
 */

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