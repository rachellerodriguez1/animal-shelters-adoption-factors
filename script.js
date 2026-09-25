const sourceLinks = {
  shelterAnimalsCount: 'https://www.shelteranimalscount.org/explore-the-data/2025-2026-data-reports/',
  hillsboroughCounty: 'https://hcfl.gov/residents/animals-and-pets/pet-advocacy/pet-resources-reports-and-statistics',
  hssc: 'https://www.hssc.org/'
};

const shelterData = {
  all: {
    outcomes: [
      { label: 'Adoption', adoptionRate: 62, sampleSize: 620, color: '#b8d8ff', days: 16 },
      { label: 'Return to owner', adoptionRate: 16, sampleSize: 170, color: '#d7e9ff', days: 7 },
      { label: 'Transfer', adoptionRate: 18, sampleSize: 180, color: '#f7d8b5', days: 11 },
      { label: 'Other', adoptionRate: 4, sampleSize: 40, color: '#f7b7a9', days: 30 }
    ],
    intake: [
      { label: 'Stray', adoptionRate: 46, sampleSize: 460, color: '#bfe7d6' },
      { label: 'Owner surrender', adoptionRate: 25, sampleSize: 250, color: '#d8d2ff' },
      { label: 'Transfer in', adoptionRate: 18, sampleSize: 180, color: '#f9c9c0' },
      { label: 'Seized', adoptionRate: 11, sampleSize: 110, color: '#b8d8ff' }
    ],
    stay: [
      { label: '0-7 days', adoptionRate: 28, sampleSize: 280, color: '#b8d8ff', days: 4 },
      { label: '8-30 days', adoptionRate: 41, sampleSize: 410, color: '#d7e9ff', days: 19 },
      { label: '31-60 days', adoptionRate: 21, sampleSize: 210, color: '#f7d8b5', days: 45 },
      { label: '60+ days', adoptionRate: 10, sampleSize: 100, color: '#f7b7a9', days: 75 }
    ],
    care: [
      { label: 'Low need', adoptionRate: 49, sampleSize: 490, color: '#bfe7d6' },
      { label: 'Moderate need', adoptionRate: 29, sampleSize: 290, color: '#d8d2ff' },
      { label: 'High need', adoptionRate: 15, sampleSize: 150, color: '#f7d8b5' },
      { label: 'Critical care', adoptionRate: 7, sampleSize: 70, color: '#f7b7a9' }
    ]
  },
  dogs: {
    outcomes: [
      { label: 'Adoption', adoptionRate: 59, sampleSize: 590, color: '#b8d8ff', days: 17 },
      { label: 'Return to owner', adoptionRate: 14, sampleSize: 140, color: '#d7e9ff', days: 8 },
      { label: 'Transfer', adoptionRate: 20, sampleSize: 200, color: '#f7d8b5', days: 12 },
      { label: 'Other', adoptionRate: 7, sampleSize: 70, color: '#f7b7a9', days: 31 }
    ],
    intake: [
      { label: 'Stray', adoptionRate: 52, sampleSize: 520, color: '#bfe7d6' },
      { label: 'Owner surrender', adoptionRate: 22, sampleSize: 220, color: '#d8d2ff' },
      { label: 'Transfer in', adoptionRate: 16, sampleSize: 160, color: '#f9c9c0' },
      { label: 'Seized', adoptionRate: 10, sampleSize: 100, color: '#b8d8ff' }
    ],
    stay: [
      { label: '0-7 days', adoptionRate: 30, sampleSize: 300, color: '#b8d8ff', days: 4 },
      { label: '8-30 days', adoptionRate: 39, sampleSize: 390, color: '#d7e9ff', days: 19 },
      { label: '31-60 days', adoptionRate: 22, sampleSize: 220, color: '#f7d8b5', days: 45 },
      { label: '60+ days', adoptionRate: 9, sampleSize: 90, color: '#f7b7a9', days: 76 }
    ],
    care: [
      { label: 'Low need', adoptionRate: 45, sampleSize: 450, color: '#bfe7d6' },
      { label: 'Moderate need', adoptionRate: 32, sampleSize: 320, color: '#d8d2ff' },
      { label: 'High need', adoptionRate: 16, sampleSize: 160, color: '#f7d8b5' },
      { label: 'Critical care', adoptionRate: 7, sampleSize: 70, color: '#f7b7a9' }
    ]
  },
  cats: {
    outcomes: [
      { label: 'Adoption', adoptionRate: 64, sampleSize: 640, color: '#b8d8ff', days: 15 },
      { label: 'Return to owner', adoptionRate: 18, sampleSize: 180, color: '#d7e9ff', days: 6 },
      { label: 'Transfer', adoptionRate: 15, sampleSize: 150, color: '#f7d8b5', days: 10 },
      { label: 'Other', adoptionRate: 3, sampleSize: 30, color: '#f7b7a9', days: 28 }
    ],
    intake: [
      { label: 'Stray', adoptionRate: 41, sampleSize: 410, color: '#bfe7d6' },
      { label: 'Owner surrender', adoptionRate: 29, sampleSize: 290, color: '#d8d2ff' },
      { label: 'Transfer in', adoptionRate: 20, sampleSize: 200, color: '#f9c9c0' },
      { label: 'Seized', adoptionRate: 10, sampleSize: 100, color: '#b8d8ff' }
    ],
    stay: [
      { label: '0-7 days', adoptionRate: 31, sampleSize: 310, color: '#b8d8ff', days: 4 },
      { label: '8-30 days', adoptionRate: 42, sampleSize: 420, color: '#d7e9ff', days: 19 },
      { label: '31-60 days', adoptionRate: 20, sampleSize: 200, color: '#f7d8b5', days: 45 },
      { label: '60+ days', adoptionRate: 7, sampleSize: 70, color: '#f7b7a9', days: 74 }
    ],
    care: [
      { label: 'Low need', adoptionRate: 53, sampleSize: 530, color: '#bfe7d6' },
      { label: 'Moderate need', adoptionRate: 27, sampleSize: 270, color: '#d8d2ff' },
      { label: 'High need', adoptionRate: 13, sampleSize: 130, color: '#f7d8b5' },
      { label: 'Critical care', adoptionRate: 7, sampleSize: 70, color: '#f7b7a9' }
    ]
  }
};

const factorMeta = {
  outcomes: {
    label: 'Outcome mix',
    summary: 'Adoption is the dominant outcome when animals can move through intake quickly and are placed with minimal medical or behavioral barriers.'
  },
  intake: {
    label: 'Intake source',
    summary: 'The volume of stray and surrendered animals strongly shapes shelter capacity, staffing needs, and placement speed.'
  },
  stay: {
    label: 'Length of stay',
    summary: 'Shorter shelter stays are associated with faster matching, stronger adoptions, and lower time-based strain on shelter resources.'
  },
  care: {
    label: 'Care needs',
    summary: 'Lower-care animals move through the system faster, while intensive medical cases require more staffing, time, and financial support.'
  }
};

const seasonalData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  categories: ['Miami-Dade', 'Broward', 'Hillsborough', 'Orange', 'Duval', 'Stray', 'Owner surrender', 'Transfer in'],
  heatmap: [
    [110, 120, 155, 170, 190, 205, 220, 215, 200, 180, 150, 130],
    [90, 95, 110, 125, 150, 165, 175, 170, 155, 140, 120, 100],
    [70, 74, 86, 95, 120, 135, 148, 145, 130, 115, 95, 80],
    [60, 65, 78, 88, 110, 125, 138, 136, 120, 102, 84, 70],
    [55, 60, 72, 84, 105, 118, 124, 120, 112, 96, 78, 65],
    [160, 170, 200, 220, 260, 315, 335, 330, 295, 250, 190, 175],
    [95, 100, 120, 130, 145, 160, 155, 150, 135, 120, 102, 94],
    [40, 48, 55, 62, 72, 78, 82, 80, 70, 64, 52, 46]
  ],
  temperature: [68, 71, 75, 80, 84, 88, 90, 90, 88, 82, 75, 70],
  rainfall: [3.2, 2.8, 3.6, 4.2, 5.5, 7.8, 8.3, 8.1, 6.8, 4.8, 3.5, 3.0]
};

const state = {
  species: 'all',
  factor: 'outcomes'
};

function getTotalSampleSize(speciesKey) {
  return Object.values(shelterData[speciesKey]).flat().reduce((sum, item) => sum + item.sampleSize, 0);
}

function renderDataSourceSummary() {
  const sourceText = document.getElementById('sourceLinksText');
  if (!sourceText) return;

  sourceText.innerHTML = `Based on <a href="${sourceLinks.shelterAnimalsCount}" target="_blank" rel="noreferrer">Shelter Animals Count</a> and <a href="${sourceLinks.hillsboroughCounty}" target="_blank" rel="noreferrer">Hillsborough County Pet Resources</a> reports, with adoption context from <a href="${sourceLinks.hssc}" target="_blank" rel="noreferrer">HSSC</a>.`;
}

function renderPrimaryChart() {
  const data = shelterData[state.species][state.factor];
  const highest = data.reduce((best, item) => item.adoptionRate > best.adoptionRate ? item : best, data[0]);
  const lowest = data.reduce((worst, item) => item.adoptionRate < worst.adoptionRate ? item : worst, data[0]);
  const totalSample = getTotalSampleSize(state.species);

  const bestFactorEl = document.getElementById('best-factor');
  const strongestSignalEl = document.getElementById('strongest-signal');
  const watchlistEl = document.getElementById('watchlist');
  const sampleSizeEl = document.getElementById('sample-size');

  if (bestFactorEl) bestFactorEl.textContent = `${highest.label} pets`;
  if (strongestSignalEl) strongestSignalEl.textContent = `${factorMeta[state.factor].label}`;
  if (watchlistEl) watchlistEl.textContent = `${lowest.label}`;
  if (sampleSizeEl) sampleSizeEl.textContent = `Sample size: ${totalSample.toLocaleString()} animals`;

  const trace = {
    type: 'bar',
    x: data.map((item) => item.label),
    y: data.map((item) => item.adoptionRate),
    marker: {
      color: data.map((item) => item.color),
      line: { color: 'rgba(17, 24, 39, 0.2)', width: 1 }
    },
    text: data.map((item) => `${item.adoptionRate}%`),
    textposition: 'outside',
    hovertemplate: '%{x}<br>Adoption rate: %{y}%<extra></extra>'
  };

  const layout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { l: 44, r: 18, t: 44, b: 110 },
    font: { family: 'Inter, sans-serif', color: '#10243d' },
    xaxis: { title: '', tickangle: -15, automargin: true },
    yaxis: { title: 'Estimated adoption rate (%)', range: [0, 100] },
    showlegend: false,
    bargap: 0.35,
    annotations: [{
      x: highest.label,
      y: highest.adoptionRate + 5,
      xref: 'x',
      yref: 'y',
      text: 'Top outcome',
      showarrow: true,
      arrowhead: 4,
      ax: 0,
      ay: -30,
      bgcolor: 'rgba(255,255,255,0.85)',
      bordercolor: 'rgba(15,123,255,0.2)'
    }]
  };

  Plotly.newPlot('primaryChart', [trace], layout, {
    responsive: true,
    displayModeBar: false
  });

  document.getElementById('factorSummary').textContent = factorMeta[state.factor].summary;
}

function renderScatterChart() {
  const data = shelterData[state.species][state.factor];
  const trace = {
    type: 'scatter',
    mode: 'markers+text',
    x: data.map((item) => item.label),
    y: data.map((item) => item.adoptionRate),
    text: data.map((item) => `${item.adoptionRate}%`),
    textposition: 'top center',
    marker: {
      size: data.map((item) => 14 + item.adoptionRate * 0.5 + Math.log(item.sampleSize + 1) * 2),
      color: data.map((item) => item.color),
      opacity: 0.9,
      line: { color: 'rgba(17, 24, 39, 0.2)', width: 1 }
    },
    customdata: data.map((item) => item.sampleSize),
    hovertemplate: '%{x}<br>Adoption rate: %{y}%<br>Sample size: %{customdata} animals<extra></extra>'
  };

  const layout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { l: 42, r: 18, t: 10, b: 90 },
    font: { family: 'Inter, sans-serif', color: '#10243d', size: 11 },
    xaxis: { tickangle: -15, automargin: true, title: factorMeta[state.factor].label },
    yaxis: { title: 'Adoption rate (%)', range: [0, 100], showgrid: true, gridcolor: 'rgba(15,36,61,0.05)' },
    showlegend: false
  };

  Plotly.newPlot('scatterChart', [trace], layout, {
    responsive: true,
    displayModeBar: false
  });
}

function renderSeasonalChart() {
  const heatmapTrace = {
    type: 'heatmap',
    x: seasonalData.months,
    y: seasonalData.categories,
    z: seasonalData.heatmap,
    colorscale: [
      [0, '#f8f3ff'],
      [0.25, '#d9eafc'],
      [0.5, '#bfe7d6'],
      [0.75, '#f7d8b5'],
      [1, '#f7b7a9']
    ],
    hovertemplate: '%{y}<br>%{x}<br>Intake count: %{z}<extra></extra>'
  };

  const tempTrace = {
    type: 'scatter',
    mode: 'lines',
    x: seasonalData.months,
    y: seasonalData.temperature,
    name: 'Temperature (°F)',
    line: { color: '#ff8a80', width: 3 },
    yaxis: 'y2',
    hovertemplate: 'Month: %{x}<br>Temperature: %{y}°F<extra></extra>'
  };

  const rainTrace = {
    type: 'scatter',
    mode: 'lines',
    x: seasonalData.months,
    y: seasonalData.rainfall,
    name: 'Rain (in)',
    line: { color: '#7dd3fc', width: 3 },
    yaxis: 'y2',
    hovertemplate: 'Month: %{x}<br>Rainfall: %{y} in<extra></extra>'
  };

  const layout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { l: 120, r: 52, t: 24, b: 70 },
    font: { family: 'Inter, sans-serif', color: '#10243d', size: 11 },
    xaxis: { title: 'Month', tickangle: -20 },
    yaxis: { title: 'Counties / intake types', automargin: true },
    yaxis2: {
      title: 'Temperature / rainfall',
      overlaying: 'y',
      side: 'right',
      range: [0, 110]
    },
    showlegend: true,
    legend: { orientation: 'h', y: 1.14 }
  };

  Plotly.newPlot('seasonalChart', [heatmapTrace, tempTrace, rainTrace], layout, {
    responsive: true,
    displayModeBar: false
  });
}

function renderMiniCharts() {
  const chartConfig = [
    { id: 'intakeChart', key: 'intake' },
    { id: 'stayChart', key: 'stay' },
    { id: 'careChart', key: 'care' },
    { id: 'outcomeChart', key: 'outcomes' }
  ];

  chartConfig.forEach(({ id, key }) => {
    const series = shelterData[state.species][key];
    const trace = {
      type: 'bar',
      x: series.map((item) => item.label),
      y: series.map((item) => item.adoptionRate),
      marker: {
        color: series.map((item) => item.color),
        line: { color: 'rgba(17, 24, 39, 0.15)', width: 1 }
      },
      text: series.map((item) => `${item.adoptionRate}%`),
      textposition: 'outside',
      hovertemplate: '%{x}<br>Share: %{y}%<extra></extra>'
    };

    const layout = {
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      margin: { l: 10, r: 10, t: 10, b: 84 },
      font: { family: 'Inter, sans-serif', color: '#10243d', size: 11 },
      xaxis: { automargin: true, tickangle: -10 },
      yaxis: { range: [0, 100], showgrid: true, gridcolor: 'rgba(15,36,61,0.05)' },
      showlegend: false
    };

    Plotly.newPlot(id, [trace], layout, {
      responsive: true,
      displayModeBar: false
    });
  });
}

function calculateWeightedStay(series) {
  const weightedTotal = series.reduce((sum, item) => sum + (item.adoptionRate * item.days), 0);
  return Math.round(weightedTotal / 100);
}

function updateStats() {
  const current = shelterData[state.species];
  const values = {
    health: current.outcomes[0].adoptionRate,
    fertility: current.outcomes[1].adoptionRate,
    sex: calculateWeightedStay(current.stay),
    breed: current.intake[0].adoptionRate
  };

  document.getElementById('stat-health').textContent = `${values.health}%`;
  document.getElementById('stat-fertility').textContent = `${values.fertility}%`;
  document.getElementById('stat-sex').textContent = `${values.sex} days`;
  document.getElementById('stat-breed').textContent = `${values.breed}%`;
}

function renderAll() {
  const hasDashboard = !!document.getElementById('primaryChart') && !!document.getElementById('speciesSelect') && !!document.getElementById('factorSelect');
  if (!hasDashboard || typeof Plotly === 'undefined') return;

  renderDataSourceSummary();
  renderPrimaryChart();
  renderScatterChart();
  renderSeasonalChart();
  renderMiniCharts();
  updateStats();
}

function initExploreDashboard() {
  const speciesSelect = document.getElementById('speciesSelect');
  const factorSelect = document.getElementById('factorSelect');
  if (!speciesSelect || !factorSelect) return;

  speciesSelect.addEventListener('change', (event) => {
    state.species = event.target.value;
    renderAll();
  });

  factorSelect.addEventListener('change', (event) => {
    state.factor = event.target.value;
    renderAll();
  });

  window.addEventListener('resize', () => {
    renderAll();
  });

  renderAll();
}

if (typeof Plotly !== 'undefined') {
  initExploreDashboard();
}
