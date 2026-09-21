const shelterData = {
  all: {
    condition: [
      { label: 'Healthy', adoptionRate: 68, color: '#0f7bff' },
      { label: 'Minor medical', adoptionRate: 54, color: '#4da3ff' },
      { label: 'Recovering', adoptionRate: 41, color: '#ffb26b' },
      { label: 'Complex care', adoptionRate: 26, color: '#ff7a59' }
    ],
    fertility: [
      { label: 'Spayed / Neutered', adoptionRate: 66, color: '#28b5a3' },
      { label: 'Intact', adoptionRate: 38, color: '#7b65ff' }
    ],
    sex: [
      { label: 'Male', adoptionRate: 56, color: '#7b65ff' },
      { label: 'Female', adoptionRate: 60, color: '#ff7a59' }
    ],
    breed: [
      { label: 'Mixed breed', adoptionRate: 61, color: '#0f7bff' },
      { label: 'Labrador', adoptionRate: 58, color: '#4da3ff' },
      { label: 'Shepherd mix', adoptionRate: 48, color: '#ffb26b' },
      { label: 'Pit bull mix', adoptionRate: 45, color: '#ff7a59' },
      { label: 'Chihuahua', adoptionRate: 53, color: '#28b5a3' }
    ]
  },
  dogs: {
    condition: [
      { label: 'Healthy', adoptionRate: 72, color: '#0f7bff' },
      { label: 'Minor medical', adoptionRate: 58, color: '#4da3ff' },
      { label: 'Recovering', adoptionRate: 42, color: '#ffb26b' },
      { label: 'Complex care', adoptionRate: 28, color: '#ff7a59' }
    ],
    fertility: [
      { label: 'Spayed / Neutered', adoptionRate: 70, color: '#28b5a3' },
      { label: 'Intact', adoptionRate: 41, color: '#7b65ff' }
    ],
    sex: [
      { label: 'Male', adoptionRate: 57, color: '#7b65ff' },
      { label: 'Female', adoptionRate: 63, color: '#ff7a59' }
    ],
    breed: [
      { label: 'Mixed breed', adoptionRate: 63, color: '#0f7bff' },
      { label: 'Labrador', adoptionRate: 60, color: '#4da3ff' },
      { label: 'Shepherd mix', adoptionRate: 49, color: '#ffb26b' },
      { label: 'Pit bull mix', adoptionRate: 46, color: '#ff7a59' },
      { label: 'Chihuahua', adoptionRate: 55, color: '#28b5a3' }
    ]
  },
  cats: {
    condition: [
      { label: 'Healthy', adoptionRate: 65, color: '#0f7bff' },
      { label: 'Minor medical', adoptionRate: 51, color: '#4da3ff' },
      { label: 'Recovering', adoptionRate: 40, color: '#ffb26b' },
      { label: 'Complex care', adoptionRate: 25, color: '#ff7a59' }
    ],
    fertility: [
      { label: 'Spayed / Neutered', adoptionRate: 63, color: '#28b5a3' },
      { label: 'Intact', adoptionRate: 35, color: '#7b65ff' }
    ],
    sex: [
      { label: 'Male', adoptionRate: 54, color: '#7b65ff' },
      { label: 'Female', adoptionRate: 58, color: '#ff7a59' }
    ],
    breed: [
      { label: 'Domestic shorthair', adoptionRate: 66, color: '#0f7bff' },
      { label: 'Tabby', adoptionRate: 57, color: '#4da3ff' },
      { label: 'Siamese', adoptionRate: 61, color: '#ffb26b' },
      { label: 'Calico', adoptionRate: 59, color: '#ff7a59' },
      { label: 'Black cat', adoptionRate: 50, color: '#28b5a3' }
    ]
  }
};

const factorMeta = {
  condition: {
    label: 'Condition',
    summary: 'Shelters usually see the strongest adoption lift when animals are medically stable, socialized, and ready to go home.'
  },
  fertility: {
    label: 'Fertility status',
    summary: 'Spayed and neutered pets have a clear advantage because they are often considered more ready-to-place and more manageable.'
  },
  sex: {
    label: 'Sex',
    summary: 'Sex can influence adoption timing, but the effect is usually smaller than health or sterilization status.'
  },
  breed: {
    label: 'Breed',
    summary: 'Breed preferences are a real factor in some shelters, but demand varies widely by community and animal type.'
  }
};

const state = {
  species: 'all',
  factor: 'condition'
};

function renderPrimaryChart() {
  const data = shelterData[state.species][state.factor];
  const highest = data.reduce((best, item) => item.adoptionRate > best.adoptionRate ? item : best, data[0]);
  const lowest = data.reduce((worst, item) => item.adoptionRate < worst.adoptionRate ? item : worst, data[0]);

  document.getElementById('best-factor').textContent = `${highest.label} pets`;
  document.getElementById('strongest-signal').textContent = `${factorMeta[state.factor].label}`;
  document.getElementById('watchlist').textContent = `${lowest.label}`;

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

function renderMiniCharts() {
  const chartConfig = [
    { id: 'breedChart', key: 'breed' },
    { id: 'fertilityChart', key: 'fertility' },
    { id: 'sexChart', key: 'sex' },
    { id: 'conditionChart', key: 'condition' }
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
      hovertemplate: '%{x}<br>Adoption rate: %{y}%<extra></extra>'
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

function updateStats() {
  const values = {
    health: shelterData[state.species].condition[0].adoptionRate,
    fertility: shelterData[state.species].fertility[0].adoptionRate,
    sex: shelterData[state.species].sex[0].adoptionRate,
    breed: shelterData[state.species].breed[0].adoptionRate
  };

  document.getElementById('stat-health').textContent = `${values.health}%`;
  document.getElementById('stat-fertility').textContent = `${values.fertility}%`;
  document.getElementById('stat-sex').textContent = `${values.sex}%`;
  document.getElementById('stat-breed').textContent = `${values.breed}%`;
}

function renderAll() {
  renderPrimaryChart();
  renderMiniCharts();
  updateStats();
}

document.getElementById('speciesSelect').addEventListener('change', (event) => {
  state.species = event.target.value;
  renderAll();
});

document.getElementById('factorSelect').addEventListener('change', (event) => {
  state.factor = event.target.value;
  renderAll();
});

window.addEventListener('resize', () => {
  renderAll();
});

renderAll();
