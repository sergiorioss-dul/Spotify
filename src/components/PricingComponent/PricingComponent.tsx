import { FC } from 'react'
import { IPriceCard } from './model'

const PricingCard: FC<IPriceCard> = ({ planName, price, features }) => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{planName}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">
                    ${price} <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-outline-primary">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

const PricingComponent = () => {
    const plans = [
        {
            id: 1,
            planName: 'Free',
            price: 0.0,
            features: ['Limited Tracks', 'Find your Track'],
        },
        {
            id: 2,
            planName: 'Pro',
            price: 4.99,
            features: ['50 Tracks', 'Find your Track', 'Music HD'],
        },
        {
            id: 3,
            planName: 'Premium',
            price: 9.99,
            features: ['Unlimited Tracks', 'Download all Tracks', 'Find your Track', 'Music HD'],
        },
    ]

    return (
        <div className="container">
            <div className="row">
                {plans.map((plan) => (
                    <div key={plan.id} className="col-md-4">
                        <PricingCard
                            planName={plan.planName}
                            price={plan.price}
                            features={plan.features}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingComponent
