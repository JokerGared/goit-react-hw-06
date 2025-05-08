import s from "./SearchBox.module.css";
export const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <h2 className={s.searchBoxHeading}>Find contact by name</h2>
      <input
        placeholder="Enter name"
        className={s.searchBoxInput}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
};
