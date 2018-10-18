export function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

const createMatcher = type => types => types.includes(type);

const matchers = {
  string: createMatcher(String),
  number: createMatcher(Number),
  boolean: createMatcher(Boolean)
};

/**
 * Provide a general way of checking whether
 * a value matches one of the given types.
 *
 * @param {*} value
 * @param {...any} types
 */
export function matchType(value, ...types) {
  if (isNullOrUndefined(value)) {
    return false;
  }

  for (const matcher in matchers) {
    if (typeof value === matcher && matchers[matcher](types)) {
      return true;
    }
  }

  return types.includes(value.constructor);
}
