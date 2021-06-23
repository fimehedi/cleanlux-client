import React from 'react';
import itemImg from './item.png'
import FeatureCard from '../FeatureCard/FeatureCard';
import './Feature.css'

const Feature = () => {

    const featureData = [
        {
            icon: 'man',
            title: 'Expert Employee',
            description: 'Beginning midste the green fowler over in there have could will shell do forth signs upon sixth together cattle tell ame image better cause dominion.'
        },
        {
            icon: 'tag',
            title: 'Affordable Package',
            description: 'Beginning midste the green fowler over in there have could will shell do forth signs upon sixth together cattle tell ame image better cause dominion.'
        },
        {
            icon: 'like',
            title: '100% Satisfaction',
            description: 'Beginning midste the green fowler over in there have could will shell do forth signs upon sixth together cattle tell ame image better cause dominion.'
        }
    ]

    return (
        <section className="my-5 container feature-container" id="feature">
            <div className="text-center my-5 pt-5">
                <img src={itemImg} alt="" />
                <h2 className="font-weight-bold text-primary text-uppercase my-4">Expert Cleaning Service <br /> you Can Trust</h2>
                <h6 className="text-secondary text-uppercase">Special Feature</h6>
            </div>

            <div className="row my-5 py-3">
                {
                    featureData.map((feature, idx) => <FeatureCard key={idx} feature={feature} />)
                }
            </div>

        </section>
    );
};

export default Feature;