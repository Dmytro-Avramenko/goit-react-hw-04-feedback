import React, { useState } from 'react';
// import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good * 100) / countTotalFeedback)

  function onLeaveFeedback(evt) {

    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }   
  }

  return (
      <Section title="Please leave feedback">

        <FeedbackOptions
        options={{ good, neutral, bad }}  
          onLeaveFeedback={onLeaveFeedback}
        />

        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
}



// код на класа/////////////////////////////////////

// import { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';
// import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = opt => {
//     this.setState(state => ({
//       [opt]: state[opt] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return this.countTotalFeedback()
//       ? Math.round((this.state.good * 100) / this.countTotalFeedback())
//       : 0;
//   };

//   render() {
//     return (
//       <Section title="Please leave feedback">

//         <FeedbackOptions
//           onOptions={this.state}
          
//           onLeaveFeedback={this.onLeaveFeedback}
//         />

//         {this.countTotalFeedback() > 0 ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     );
//   }
// }
