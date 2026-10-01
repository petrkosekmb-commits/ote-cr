import { pathToFileURL } from 'node:url';

export function calculate(input) {
  const defaults = {'actual-tech':0,'forecast-tech':0,'threshold':0.8,'buffer':200,'night-price':5,'sale-price':0.5,'monthly-benefit':500};
  const a = {...defaults, ...input};
  for (const key of ['actual-production','actual-export','forecast-production','forecast-export',...Object.keys(defaults)]) {
    if (!Number.isFinite(a[key]) || a[key] < 0) throw new Error(`Neplatné nebo chybějící číslo: ${key}`);
  }
  if (a.threshold > 1 || a['actual-tech'] > a['actual-production'] || a['forecast-tech'] > a['forecast-production']) throw new Error('Neplatný podíl nebo technologická spotřeba.');
  const actualNet = a['actual-production'] - a['actual-tech'];
  const annualNet = actualNet + a['forecast-production'] - a['forecast-tech'];
  if (annualNet <= 0) throw new Error('Roční čistá výroba musí být kladná.');
  const annualExport = a['actual-export'] + a['forecast-export'];
  const required = a.threshold * annualNet;
  const reserve = annualExport - required;
  const saving = a['night-price'] - a['sale-price'];
  const benefit = 12 * a['monthly-benefit'];
  return {
    actual_export_share: actualNet > 0 ? a['actual-export']/actualNet : null,
    forecast_annual_net_production_kwh: annualNet,
    forecast_annual_export_kwh: annualExport,
    forecast_annual_export_share: annualExport/annualNet,
    required_annual_export_kwh: required,
    remaining_required_export_kwh: Math.max(0, required-a['actual-export']),
    reserve_kwh: reserve,
    extra_solar_limit_with_buffer_kwh: Math.max(0,reserve-a.buffer),
    deficit_kwh: Math.max(0,-reserve),
    annual_benefit_assumption_czk: benefit,
    extra_solar_after_reserve_break_even_kwh: saving > 0 ? benefit/saving : null,
    total_extra_solar_break_even_kwh: saving > 0 && reserve >= 0 ? reserve+benefit/saving : null
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const input = {};
    for (const arg of process.argv.slice(2)) {
      const m = /^--([a-z-]+)=(.+)$/.exec(arg);
      if (!m) throw new Error('Použij --parametr=číslo.');
      input[m[1]] = Number(m[2]);
    }
    console.log(JSON.stringify(calculate(input),null,2));
  } catch (error) { console.error(error.message); process.exitCode=1; }
}
