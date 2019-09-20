import React, {Component} from 'react';
import {render} from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backCountry: 10,
    goal: 100
};

class SkiDayCounter extends Component {
    render() {
        const {total, powder, backCountry, goal} = this.props;
        return (
            <section>
                <div>
                    <p>Total Days: {total}</p>
                </div>
                <div>
                    <p>Powder Days: {powder}</p>
                </div>
                <div>
                    <p>BackCountry Days: {backCountry}</p>
                </div>
                <div>
                    <p>Goal Days: {goal}</p>
                </div>

            </section>
        )
    }
}

render(
    <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backCountry={skiData.backCountry}
        goal={skiData.goal}
    />,
    document.getElementById('root')
)