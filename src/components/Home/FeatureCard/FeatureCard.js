import classNames from 'classnames';
import React from 'react';
import classes from './FeatureCard.module.css'
import './FeatureCard.css'

const FeatureCard = ({ feature: { icon, title, description } }) => {
    return (
        <div className="col-md-4 text-center">
            <div className={classNames(classes.card, "border border-radius shadow px-4 py-5 card-container")}>
                <div className="iconContainer">
                    <div className={`icon ${icon}`}></div>
                </div>

                <div>
                    <h3 className={classNames(classes.title, 'py-4')}>{title}</h3>
                    <p className={classNames(classes.description)}>{description}</p>
                </div>

            </div>
        </div >
    );
};

export default FeatureCard;