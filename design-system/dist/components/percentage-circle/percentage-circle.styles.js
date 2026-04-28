const o = (e, t) => ({
  zIndex: 0,
  position: "relative",
  fontSize: t,
  width: "1em",
  height: "1em",
  "-webkit-border-radius": "50%",
  "-moz-border-radius": "50%",
  "-ms-border-radius": "50%",
  "-o-border-radius": "50%",
  borderRadius: "50%",
  float: "left",
  backgroundColor: e.empty,
  ":after": {
    position: "absolute",
    top: "0.13em",
    left: "0.13em",
    display: "block",
    content: '""',
    "-webkit-border-radius": "50%",
    "-moz-border-radius": "50%",
    "-ms-border-radius": "50%",
    "-o-border-radius": "50%",
    borderRadius: "50%",
    backgroundColor: e.inner,
    width: "0.74em",
    height: "0.74em"
  }
}), r = (e, t) => ({
  position: "absolute",
  border: `0.13em solid ${t.fill}`,
  width: "1em",
  height: "1em",
  clip: "rect(0em, 0.5em, 1em, 0em)",
  "-webkit-border-radius": "50%",
  "-moz-border-radius": "50%",
  "-ms-border-radius": "50%",
  "-o-border-radius": "50%",
  borderRadius: "50%",
  "-webkit-transform": `rotate(${e * 3.6}deg)`,
  "-moz-transform": `rotate(${e * 3.6}deg)`,
  "-ms-transform": `rotate(${e * 3.6}deg)`,
  "-o-transform": `rotate(${e * 3.6}deg)`,
  transform: `rotate(${e * 3.6}deg)`
}), i = (e) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 2,
  left: 0,
  top: 0,
  fontSize: "0.21em",
  color: e.fill,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  fontWeight: 700,
  margin: 0,
  gap: ".1em"
}), a = (e) => ({
  position: "absolute",
  width: "1em",
  height: "1em",
  clip: "rect(0em, 1em, 1em, 0.5em)",
  transform: "rotate(180deg)",
  ...e >= 50 && {
    clip: "rect(auto, auto, auto, auto)"
  }
}), s = (e) => ({
  ...r(0, e),
  "-webkit-transform": "rotate(180deg)",
  "-moz-transform": "rotate(180deg)",
  "-ms-transform": "rotate(180deg)",
  "-o-transform": "rotate(180deg)",
  transform: "rotate(180deg)"
}), d = (e) => ({
  color: e
});
export {
  o as circleContainerStyles,
  s as fillRotationFiftyPercentStyles,
  r as fillRotationStyles,
  d as getTextStyles,
  a as innerFillContainerStyles,
  i as innerTextStyles
};
//# sourceMappingURL=percentage-circle.styles.js.map
