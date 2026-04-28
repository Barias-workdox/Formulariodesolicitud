const i = ({
  state: d,
  action: { payload: e }
}) => {
  const { disabled: a } = d;
  return {
    ...d,
    disabled: e.disabled ?? !a
  };
};
export {
  i as updateDisabled
};
//# sourceMappingURL=update-disabled.js.map
