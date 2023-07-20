import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.filterBox}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
