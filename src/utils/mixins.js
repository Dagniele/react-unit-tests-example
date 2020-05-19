export function transition(what = "all", time = 0.2, way = "ease-in-out") {
  return `transition: ${what} ${time}s ${way};`;
}

export function noFocus() {
  return `
    &:focus {
      outline: none;
    }
  `;
}

const SHADOWS = {
  0: "none",
  2: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
  3: "0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12)",
  4: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
  6: "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2)",
  8: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
  16: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0  6px 30px 5px rgba(0, 0, 0, 0.12), 0  8px 10px -5px rgba(0, 0, 0, 0.2)",
  24: "0  9px 46px  8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px  3px rgba(0, 0, 0, 0.2)"
};

export function makeShadow(dp) {
  if (!SHADOWS[dp]) throw new Error(`dp ${dp} is an invalid shadow depth`);

  return `box-shadow: ${SHADOWS[dp]};`;
}
