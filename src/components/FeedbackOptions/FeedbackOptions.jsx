import PropTypes from "prop-types"
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export function FeedbackOptions ({ options, onLeaveFeedback }) {
  const optionsBtn = Object.keys(options)
  
  return optionsBtn.map(optio => (
    <button
      key={optio}
      className={css.button}
      type="button"
      name={optio}
      onClick={onLeaveFeedback}
    >
      {optio}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf
    (PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
}



// код на класа/////////////////////////////////////
// import PropTypes from "prop-types"
// import css from '../FeedbackOptions/FeedbackOptions.module.css';

// export const FeedbackOptions = ({ onOptions, onLeaveFeedback }) => {
//   const optionsList = Object.keys(onOptions)
  
//   return optionsList.map(optio => (
//     <button
//       className={css.button}
//       type="button"
//       key={optio}
//       onClick={() => onLeaveFeedback(optio)}
//     >
//       {optio}
//     </button>
//   ));
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf
//     (PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired
// }










