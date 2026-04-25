import { useMemo, useState } from 'react'
import { annualTax, fmtPKR, pct, SLAB_COLORS, SLAB_LABELS, SLABS, WHT } from './taxUtils.js'

export default function CalculatorSection() {
  const [salary, setSalary] = useState('')
  const [cat, setCat] = useState('')
  const [amt, setAmt] = useState('')

  const monthly = Number(salary || 0)
  const salaryModel = useMemo(() => {
    if (!monthly) return null
    const annual = monthly * 12
    const yTax = annualTax(annual)
    const mTax = yTax / 12
    const si = SLABS.findIndex((s) => annual >= s.min && annual <= s.max)
    const color = SLAB_COLORS[si] || '#3b82f6'
    const label = SLAB_LABELS[si] || ''
    return { annual, yTax, mTax, color, label }
  }, [monthly])

  const whtAmount = Number(amt || 0)
  const whtModel = useMemo(() => {
    if (!cat || !whtAmount) return null
    const r = WHT[cat]
    if (!r) return null
    const wF = whtAmount * r.filer
    const wN = whtAmount * r.nonfiler
    return { r, wF, wN }
  }, [cat, whtAmount])

  return (
    <section className="section calc-section" id="calculator">
      <div className="container">
        <div className="center reveal-on-scroll">
          <div className="section-tag">FBR 2025-26</div>
          <h2 className="section-title">
            Calculate Your <span className="grad">Tax Instantly</span>
          </h2>
          <p className="section-sub">
            Accurate, up-to-date calculators based on FBR Finance Act 2025-26. For planning only — consult us for personalized
            advice.
          </p>
        </div>

        <div className="calc-full-grid reveal-on-scroll">
          <div className="calc-card">
            <div className="calc-card-header">
              <div className="calc-card-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3>Salary Tax Calculator</h3>
                <p>FBR 2025-26 Progressive Slabs</p>
              </div>
            </div>
            <div className="field-group">
              <label className="field-label">Monthly Salary (PKR)</label>
              <div className="field-wrap">
                <span className="field-prefix">PKR</span>
                <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="e.g. 150,000" />
              </div>
            </div>
            <div className="result-box">
              {!salaryModel ? (
                <div className="zero-msg">Enter your monthly salary to see results.</div>
              ) : (
                <>
                  <table className="result-table">
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Monthly</th>
                        <th>Annual</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Gross Salary</td>
                        <td>{fmtPKR(monthly)}</td>
                        <td>{fmtPKR(salaryModel.annual)}</td>
                      </tr>
                      <tr>
                        <td>Income Tax</td>
                        <td className="val-tax">{fmtPKR(salaryModel.mTax)}</td>
                        <td className="val-tax">{fmtPKR(salaryModel.yTax)}</td>
                      </tr>
                      <tr className="hl">
                        <td>After-Tax Salary</td>
                        <td className="val-net">{fmtPKR(monthly - salaryModel.mTax)}</td>
                        <td className="val-net">{fmtPKR(salaryModel.annual - salaryModel.yTax)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ padding: '10px 16px' }}>
                    <span
                      className="slab-tag"
                      style={{
                        background: `${salaryModel.color}18`,
                        color: salaryModel.color,
                        border: `1px solid ${salaryModel.color}30`,
                      }}
                    >
                      Slab: {salaryModel.label} &nbsp;·&nbsp; Effective Rate: {pct(salaryModel.yTax, salaryModel.annual)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="calc-card">
            <div className="calc-card-header">
              <div className="calc-card-icon">
                <i className="fa-solid fa-receipt"></i>
              </div>
              <div>
                <h3>Withholding Tax Calculator</h3>
                <p>Section 153 — FBR 2025-26</p>
              </div>
            </div>
            <div className="field-group">
              <label className="field-label">Category</label>
              <div className="field-wrap">
                <select value={cat} onChange={(e) => setCat(e.target.value)}>
                  <option value="">— Select Category —</option>
                  <optgroup label="By Company (Sec 153)">
                    <option value="goods_company">Goods — By Company</option>
                    <option value="services_company">Services — By Company</option>
                    <option value="contracts_company">Contracts — By Company</option>
                    <option value="it_services">IT / IT-Enabled Services</option>
                  </optgroup>
                  <optgroup label="By Individual / AOP">
                    <option value="goods_individual">Goods — By Individual/AOP</option>
                    <option value="services_individual">Services — By Individual/AOP</option>
                    <option value="contracts_individual">Contracts — By Individual/AOP</option>
                  </optgroup>
                  <optgroup label="Other Payments">
                    <option value="bank_withdrawal">Bank Cash Withdrawal (&gt;50k)</option>
                    <option value="dividend">Dividend</option>
                    <option value="profit_debt">Profit on Debt</option>
                    <option value="rent">Rent (Immovable Property)</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="field-group">
              <label className="field-label">Taxable Amount (PKR)</label>
              <div className="field-wrap">
                <span className="field-prefix">PKR</span>
                <input type="number" value={amt} onChange={(e) => setAmt(e.target.value)} placeholder="Enter amount" />
              </div>
            </div>
            <div className="result-box">
              {!whtModel ? (
                <div className="zero-msg">Select a category and enter the taxable amount.</div>
              ) : (
                <>
                  <table className="result-table">
                    <thead>
                      <tr>
                        <th>
                          {whtModel.r.label}{' '}
                          <span style={{ opacity: 0.6, fontWeight: 400 }}>{whtModel.r.note}</span>
                        </th>
                        <th>Filer</th>
                        <th>Non-Filer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Taxable Amount</td>
                        <td>{fmtPKR(whtAmount)}</td>
                        <td>{fmtPKR(whtAmount)}</td>
                      </tr>
                      <tr>
                        <td>WHT Deducted</td>
                        <td className="val-tax">{fmtPKR(whtModel.wF)}</td>
                        <td className="val-tax">{fmtPKR(whtModel.wN)}</td>
                      </tr>
                      <tr className="hl">
                        <td>Payment After Tax</td>
                        <td className="val-net">{fmtPKR(whtAmount - whtModel.wF)}</td>
                        <td className="val-net">{fmtPKR(whtAmount - whtModel.wN)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ padding: '10px 16px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span className="slab-tag" style={{ background: '#eff6ff', color: '#1a56db', border: '1px solid #bfdbfe' }}>
                      Filer: {(whtModel.r.filer * 100).toFixed(1)}%
                    </span>
                    <span className="slab-tag" style={{ background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca' }}>
                      Non-Filer: {(whtModel.r.nonfiler * 100).toFixed(1)}%
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="calc-footer-note">
          Based on <strong>Finance Act 2025-26 · FBR</strong> &nbsp;·&nbsp; Effective 1 July 2025 – 30 June 2026 &nbsp;·&nbsp;
          For reference only.{' '}
          <a href="#contact" style={{ color: 'var(--blue)', fontWeight: 600 }}>
            Consult our experts
          </a>{' '}
          for personalized advice.
        </div>
      </div>
    </section>
  )
}

