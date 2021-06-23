import React from 'react';
import cx from 'classnames';
import cleanersImg from './cleaners.jpg'
import classes from './HeaderMain.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    return (
        <main className={cx(classes.headerMain, "container my-4 pb-5")}>
            <div className={cx(classes.headerRow, 'row align-items-center')}>
                <div className="col-md-6">
                    <div>
                        <h1 className={cx(classes.title, 'text-primary')}>Cleaning Your <br /> Worries Away</h1>
                        <p className="text-secondary-alt py-3">Blessed lesser make green spirit midst life lights creeping to fowl whales best multiply. Day them earth him without hath stars first. Dry us every him rule him grass set peter dolor swatch.</p>
                        <a href="#services" className={cx(classes.button, "btn btn-primary")}>
                            <span>Book A Service</span>
                            <FontAwesomeIcon icon={faArrowRight} className={classes.btnIcon} />
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={cleanersImg} alt="" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;