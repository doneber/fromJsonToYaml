// Helper function to convert JSON to YAML
function jsonToYaml(json) {
  let yaml = '';
  const space = '  ';
  const addKeyValue = (key, value, level) => {
    const indent = space.repeat(level);
    if (typeof value === 'object') {
      yaml += `${indent}${key}:\n`;
      for (const [k, v] of Object.entries(value)) {
        addKeyValue(k, v, level + 1);
      }
    } else {
      yaml += `${indent}${key}: ${value}\n`;
    }
  };
  for (const [key, value] of Object.entries(json)) {
    addKeyValue(key, value, 0);
  }
  return yaml;
}

// Get DOM elements
const jsonInput = document.getElementById('json-input');
const convertBtn = document.getElementById('convert-btn');
const yamlOutput = document.getElementById('yaml-output');

// Add event listener to button
convertBtn.addEventListener('click', () => {
  try {
    const json = JSON.parse(jsonInput.value);
    const yaml = jsonToYaml(json);
    yamlOutput.value = yaml;
  } catch (error) {
    yamlOutput.value = `Error: ${error.message}`;
  }
});