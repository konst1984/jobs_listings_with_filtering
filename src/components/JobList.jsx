import { useDispatch, useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectCurrentPositions } from "../store/positions/position_selectors";
import { addFilter } from "../store/filters/filters_actions";

const JobList = () => {
  const filters = useSelector((state) => state.filters);
  const positions = useSelector((state) =>
    selectCurrentPositions(state, filters)
  );

  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
