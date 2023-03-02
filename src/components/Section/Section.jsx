import css from '../Section/Section.module.css';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <div className={css.class_div}>
      <h1 className={css.title}>
        {title}
      </h1>
        {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}



// import css from '../Section/Section.module.css';
// import PropTypes from 'prop-types';

// export const Section = ({ title, children }) => {
//   return (
//     <div className={css.class_div}>
//       <h1 className={css.title}>
//         {title}
//       </h1>
//         {children}
//     </div>
//   );
// };

// Section.propTypes = {
//   children: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired
// }


