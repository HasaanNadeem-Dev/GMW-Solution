export const SLABS = [
  { min: 0, max: 600000, fixed: 0, rate: 0, base: 0 },
  { min: 600001, max: 1200000, fixed: 0, rate: 0.01, base: 600000 },
  { min: 1200001, max: 2200000, fixed: 6000, rate: 0.11, base: 1200000 },
  { min: 2200001, max: 3200000, fixed: 116000, rate: 0.23, base: 2200000 },
  { min: 3200001, max: 4100000, fixed: 346000, rate: 0.3, base: 3200000 },
  { min: 4100001, max: Infinity, fixed: 616000, rate: 0.35, base: 4100000 },
]

export const SLAB_LABELS = ['Exempt', '1%', 'Rs.6k + 11%', 'Rs.116k + 23%', 'Rs.346k + 30%', 'Rs.616k + 35%']
export const SLAB_COLORS = ['#22c55e', '#3b82f6', '#6366f1', '#f59e0b', '#f97316', '#ef4444']

export const WHT = {
  goods_company: { label: 'Goods (Company)', filer: 0.04, nonfiler: 0.08, note: 'Sec 153(1)(a)' },
  services_company: { label: 'Services (Company)', filer: 0.15, nonfiler: 0.3, note: 'Sec 153(1)(b)' },
  contracts_company: { label: 'Contracts (Company)', filer: 0.075, nonfiler: 0.15, note: 'Sec 153(1)(c)' },
  it_services: { label: 'IT/IT-Enabled Services', filer: 0.04, nonfiler: 0.06, note: 'Sec 153 – IT' },
  goods_individual: { label: 'Goods (Individual/AOP)', filer: 0.045, nonfiler: 0.09, note: 'Sec 153(1)(a)' },
  services_individual: { label: 'Services (Individual)', filer: 0.15, nonfiler: 0.3, note: 'Sec 153(1)(b)' },
  contracts_individual: { label: 'Contracts (Individual)', filer: 0.075, nonfiler: 0.15, note: 'Sec 153(1)(c)' },
  bank_withdrawal: { label: 'Bank Withdrawal >50k', filer: 0.006, nonfiler: 0.012, note: 'Sec 231A' },
  dividend: { label: 'Dividend', filer: 0.25, nonfiler: 0.25, note: 'Sec 150' },
  profit_debt: { label: 'Profit on Debt', filer: 0.2, nonfiler: 0.2, note: 'Sec 151' },
  rent: { label: 'Rent (Immovable Property)', filer: 0.15, nonfiler: 0.3, note: 'Sec 155' },
}

export function annualTax(a) {
  const s = SLABS.find((slab) => a >= slab.min && a <= slab.max)
  return s ? s.fixed + (a - s.base) * s.rate : 0
}

export function fmtPKR(n) {
  return `PKR ${Math.round(n).toLocaleString('en-PK')}`
}

export function pct(t, g) {
  return g ? `${((t / g) * 100).toFixed(2)}%` : '0%'
}

