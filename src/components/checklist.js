import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createChecklistAction,
  deleteChecklistAction,
  getAllChecklistAction,
} from "../action/checklist";

const Checklist = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { checklists, successCreate } = useSelector((state) => state.checklist);

  if (successCreate) {
    alert("create list success");
  }

  return (
    <div>
      <input type="text" placeholder="create checklist" />
      <button onClick={() => dispatch(createChecklistAction(token))}>
        Submit
      </button>
      <button onClick={() => dispatch(getAllChecklistAction(token))}>
        GET CHECKLIST
      </button>
      <div>
        <p>List checklist</p>
        <ul>
          {checklists.length !== 0
            ? checklists.map((data) => <li key={data.id}>{data.name}</li>)
            : null}
        </ul>
      </div>
      <button onClick={() => dispatch(deleteChecklistAction(token, 1))}>
        DELETE CHECKLIST
      </button>
    </div>
  );
};

export default Checklist;
