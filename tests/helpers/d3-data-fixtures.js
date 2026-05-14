const fs = require('fs');
const path = require('path');

const CHORD_JS_PATH = path.join(__dirname, '../../workforcetransitions/chord.js');

function readChordJs() {
  return fs.readFileSync(CHORD_JS_PATH, 'utf8');
}

function getMatrixLines() {
  const source = readChordJs();
  const match = source.match(/\.matrix\(\[([\s\S]*?)\]\s*\)/);
  if (!match) throw new Error('Could not find matrix in chord.js');
  return match[1].trim().split('\n').filter(line => line.trim().startsWith('['));
}

function parseMatrixRow(line) {
  return JSON.parse(line.trim().replace(/,\s*$/, ''));
}

function getClusters() {
  const source = readChordJs();
  const match = source.match(/var clusters = (\[[\s\S]*?\]);/);
  if (!match) throw new Error('Could not find clusters array in chord.js');
  return JSON.parse(match[1]);
}

function getFillColors() {
  const source = readChordJs();
  const match = source.match(/\.range\(\[([\s\S]*?)\]\s*\)/);
  if (!match) throw new Error('Could not find fill range in chord.js');
  return JSON.parse('[' + match[1] + ']');
}

// Pure JS reimplementation of groupTicks from chord.js, replacing d3.range with vanilla JS
function groupTicks(d) {
  if (d.value === 0) return [];
  const k = (d.endAngle - d.startAngle) / d.value;
  const values = [];
  for (let v = 0; v < d.value; v += 100) {
    values.push(v);
  }
  return values.map((v, i) => ({
    angle: v * k + d.startAngle,
    label: i % 5 ? null : v,
  }));
}

module.exports = { getMatrixLines, parseMatrixRow, getClusters, getFillColors, groupTicks };
