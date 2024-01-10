// .eslintrc.js or .eslintrc.json

module.exports = {
  // ... other ESLint configurations

  rules: {
    // ... other rules

    // Disable specific rules
    'rule-name': 'off', // or 0
    'another-rule-name': 'off', // or 0

    // Alternatively, you can use the 'off' shorthand directly in an array
    'yet-another-rule-name': ['off', 'property'],

    // ... more rules
  },
};