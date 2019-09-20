import React, {Component} from 'react';
import {render} from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backCountry: 10,
    goal: 100
};


const getPercent = decimal => {
    return decimal * 100 + '%';
}
const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal);
}

const SkiDayCounter = ({total, powder, backCountry, goal}) =>  {
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
                    <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
                </div>

            </section>
        )
}

// class SkiDayCounter extends Component {

//     getPercent = decimal => {
//         return decimal * 100 + '%';
//     }

//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total/goal);
//     }

//     render() {
//         const {total, powder, backCountry, goal} = this.props;
//         return (
//             <section>
//                 <div>
//                     <p>Total Days: {total}</p>
//                 </div>
//                 <div>
//                     <p>Powder Days: {powder}</p>
//                 </div>
//                 <div>
//                     <p>BackCountry Days: {backCountry}</p>
//                 </div>
//                 <div>
//                     <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
//                 </div>

//             </section>
//         )
//     }
// }

render(
    <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backCountry={skiData.backCountry}
        goal={skiData.goal}
    />,
    document.getElementById('root')
)