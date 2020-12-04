import api from "./api";

export const getAllChecklist = (token) => {
  return api.get(
    "/checklist",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createChecklist = (token, params) => {
  return api.post(
    "/checklist",
    {
      name: "testing",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteChecklist = (token, id) => {
  return api.delete(
    `/checklist/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
