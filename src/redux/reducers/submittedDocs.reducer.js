export const submittedDocs = (
  state = ["Loading Document Name...", "Loading Document Name..."],
  action
) => {
  if (action.type === "SUBMITTED_DOCS") {
    return [action.payload.docA.name, action.payload.docB.name];
  }
  return state;
};
