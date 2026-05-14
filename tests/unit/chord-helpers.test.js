const { getMatrixLines, parseMatrixRow, getClusters, getFillColors, groupTicks } = require('../helpers/d3-data-fixtures');

describe('chord.js matrix integrity', () => {
  test('matrix has exactly 37 rows', () => {
    const rows = getMatrixLines();
    expect(rows).toHaveLength(37);
  });

  test('each matrix row has exactly 37 values', () => {
    getMatrixLines().forEach((row, i) => {
      const parsed = parseMatrixRow(row);
      expect(parsed).toHaveLength(37);
    });
  });

  test('all matrix values are non-negative integers', () => {
    getMatrixLines().forEach(row => {
      parseMatrixRow(row).forEach(val => {
        expect(Number.isInteger(val)).toBe(true);
        expect(val).toBeGreaterThanOrEqual(0);
      });
    });
  });

  test('diagonal entries are all 0 (no self-transitions)', () => {
    const rows = getMatrixLines().map(parseMatrixRow);
    for (let i = 0; i < 37; i++) {
      expect(rows[i][i]).toBe(0);
    }
  });

  test('industry rows (0-19) have zeros only in columns 0-19', () => {
    const rows = getMatrixLines().map(parseMatrixRow);
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        expect(rows[i][j]).toBe(0);
      }
    }
  });

  test('career pathway rows (20-36) have zeros only in columns 20-36', () => {
    const rows = getMatrixLines().map(parseMatrixRow);
    for (let i = 20; i < 37; i++) {
      for (let j = 20; j < 37; j++) {
        expect(rows[i][j]).toBe(0);
      }
    }
  });
});

describe('chord.js clusters integrity', () => {
  test('clusters array has exactly 37 entries', () => {
    expect(getClusters()).toHaveLength(37);
  });

  test('all cluster names are non-empty strings', () => {
    getClusters().forEach(name => {
      expect(typeof name).toBe('string');
      expect(name.length).toBeGreaterThan(0);
    });
  });

  test('first cluster is Agriculture (industry)', () => {
    expect(getClusters()[0]).toBe('Agriculture');
  });

  test('cluster at index 20 is Agriculture (career pathway)', () => {
    expect(getClusters()[20]).toBe('Agriculture');
  });

  test('last cluster is College Parallel', () => {
    const clusters = getClusters();
    expect(clusters[clusters.length - 1]).toBe('College Parallel');
  });
});

describe('chord.js fill color integrity', () => {
  test('fill color array has exactly 37 entries', () => {
    expect(getFillColors()).toHaveLength(37);
  });

  test('all fill entries are strings', () => {
    getFillColors().forEach(color => {
      expect(typeof color).toBe('string');
    });
  });

  test('fill color at index 20 is #ed1c24 (first education career cluster)', () => {
    expect(getFillColors()[20]).toBe('#ed1c24');
  });

  test('first 20 colors are the same gray (#787678 for industry sectors)', () => {
    getFillColors().slice(0, 20).forEach(color => {
      expect(color).toBe('#787678');
    });
  });
});

describe('groupTicks function', () => {
  test('returns 5 ticks for value=500 (one per 100 units)', () => {
    const ticks = groupTicks({ startAngle: 0, endAngle: Math.PI, value: 500 });
    expect(ticks).toHaveLength(5);
  });

  test('returns empty array when value is 0 (divide-by-zero guard)', () => {
    expect(groupTicks({ startAngle: 0, endAngle: Math.PI, value: 0 })).toHaveLength(0);
  });

  test('index 0 tick has a non-null label', () => {
    const ticks = groupTicks({ startAngle: 0, endAngle: Math.PI, value: 500 });
    expect(ticks[0].label).not.toBeNull();
  });

  test('indices 1-4 have null labels (only every 5th tick is labeled)', () => {
    const ticks = groupTicks({ startAngle: 0, endAngle: Math.PI, value: 1000 });
    expect(ticks[1].label).toBeNull();
    expect(ticks[2].label).toBeNull();
    expect(ticks[3].label).toBeNull();
    expect(ticks[4].label).toBeNull();
  });

  test('index 5 tick has a non-null label', () => {
    const ticks = groupTicks({ startAngle: 0, endAngle: Math.PI, value: 1000 });
    expect(ticks[5].label).not.toBeNull();
  });

  test('tick angles are monotonically increasing', () => {
    const ticks = groupTicks({ startAngle: 0, endAngle: Math.PI, value: 500 });
    for (let i = 1; i < ticks.length; i++) {
      expect(ticks[i].angle).toBeGreaterThan(ticks[i - 1].angle);
    }
  });

  test('first tick angle equals startAngle', () => {
    const ticks = groupTicks({ startAngle: 1.0, endAngle: 2.0, value: 500 });
    expect(ticks[0].angle).toBeCloseTo(1.0);
  });
});
