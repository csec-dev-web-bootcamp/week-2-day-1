function formatZodIssue(issue) {
  const { path, message } = issue;
  const pathString = path.join(".");

  return { [pathString]: message };
}

export function formatZodError(error) {
  const { issues } = error;
  if (issues?.length) {
    const errors = issues.map((currentIssue) => formatZodIssue(currentIssue));
    return errors;
  }
  return "Unknown Error";
}
