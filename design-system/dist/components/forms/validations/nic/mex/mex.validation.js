const t = ({ rawNic: d }) => d.match(
  /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/
) !== null;
export {
  t as validateMEXNic
};
//# sourceMappingURL=mex.validation.js.map
