import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { filtersContacts } from "../../redux/filters/selectors";

import clsx from "clsx";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector(filtersContacts);

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <h2 className={clsx(css.titleFilter)}>Find contacts by name</h2>
      <input
        className={clsx(css.inputFilter)}
        type="text"
        value={selectNameFilter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
export default SearchBox;
