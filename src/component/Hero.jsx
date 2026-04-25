import { useMemo, useState } from 'react'
import { annualTax, fmtPKR, WHT } from './taxUtils.js'

export default function Hero() {
  const [salary, setSalary] = useState('')
  const [whtCat, setWhtCat] = useState('')
  const [whtAmt, setWhtAmt] = useState('')

  const sal = Number(salary || 0)
  const salaryResult = useMemo(() => {
    if (!sal) return null
    const yT = annualTax(sal * 12)
    const mT = yT / 12
    return { tax: mT, net: sal - mT }
  }, [sal])

  const wAmt = Number(whtAmt || 0)
  const whtResult = useMemo(() => {
    if (!whtCat || !wAmt) return null
    const r = WHT[whtCat]
    if (!r) return null
    const wF = wAmt * r.filer
    return { tax: wF, net: wAmt - wF }
  }, [whtCat, wAmt])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-wrap">
          <div className="hero-left">
            <div className="hero-badge">
              <span></span>
              FBR Registered · Finance Act 2025-26
            </div>
            <h1 className="hero-title">
              Expert Tax Solutions
              <br />
              <span className="grad-text">Done Right,</span>
              <br />
              Every Time.
            </h1>
            <p className="hero-desc">
              GWM Solutions delivers accurate, stress-free tax consultancy for individuals and businesses — combining certified
              expertise with cutting-edge technology.
            </p>

            <div className="hero-calc">
              <div className="calc-title-row">
                <div className="calc-icon">
                  <i className="fa-solid fa-calculator"></i>
                </div>
                <h3>Quick Tax Estimator</h3>
              </div>

              <div className="calc-row">
                <div className="calc-row-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="calc-row-body">
                  <div className="calc-row-label">Salary Tax (FBR 2025-26)</div>
                  <div className="calc-field">
                    <div className="calc-input-wrap">
                      <span className="calc-curr">PKR</span>
                      <input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Monthly salary"
                      />
                    </div>
                  </div>
                  <div className="calc-results" style={{ marginTop: 8, display: salaryResult ? 'flex' : 'none' }}>
                    <span className="calc-res">
                      Tax: <strong>{salaryResult ? fmtPKR(salaryResult.tax) : '—'}</strong>
                    </span>
                    <span className="calc-res hi">
                      Net: <strong>{salaryResult ? fmtPKR(salaryResult.net) : '—'}</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="calc-row">
                <div className="calc-row-icon">
                  <i className="fa-solid fa-receipt"></i>
                </div>
                <div className="calc-row-body">
                  <div className="calc-row-label">Withholding Tax (Sec 153)</div>
                  <div className="calc-field" style={{ gap: 8, flexWrap: 'wrap' }}>
                    <select className="wht-select" value={whtCat} onChange={(e) => setWhtCat(e.target.value)}>
                      <option value="">— Select Type —</option>
                      <option value="goods_company">Goods (Company)</option>
                      <option value="services_company">Services (Company)</option>
                      <option value="contracts_company">Contracts (Company)</option>
                      <option value="goods_individual">Goods (Individual)</option>
                      <option value="services_individual">Services (Individual)</option>
                    </select>
                    <div className="calc-input-wrap" style={{ minWidth: 110, flex: 1 }}>
                      <span className="calc-curr">PKR</span>
                      <input type="number" value={whtAmt} onChange={(e) => setWhtAmt(e.target.value)} placeholder="Amount" />
                    </div>
                  </div>
                  <div className="calc-results" style={{ marginTop: 8, display: whtResult ? 'flex' : 'none' }}>
                    <span className="calc-res">
                      WHT (Filer): <strong>{whtResult ? fmtPKR(whtResult.tax) : '—'}</strong>
                    </span>
                    <span className="calc-res hi">
                      Net: <strong>{whtResult ? fmtPKR(whtResult.net) : '—'}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hc hc-center">
              <div className="hc-center-content">
                <div className="hc-center-icon">
                  <i className="fa-solid fa-scale-balanced"></i>
                </div>
                <div className="hc-center-title">GWM Solutions</div>
                <div className="hc-center-sub">Certified Tax Consultancy · FBR Compliant</div>
                <div className="hc-stats-row">
                  <div className="hc-stat">
                    <div className="hc-stat-val">10+</div>
                    <div className="hc-stat-label">Years Exp.</div>
                  </div>
                  <div className="hc-stat">
                    <div className="hc-stat-val">5K+</div>
                    <div className="hc-stat-label">Clients</div>
                  </div>
                  <div className="hc-stat">
                    <div className="hc-stat-val">98%</div>
                    <div className="hc-stat-label">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hc hc-avg float" style={{ zIndex: 5 }}>
              <div className="hc-head">
                <div className="hc-head-title">Tax Savings</div>
                <div className="hc-head-sub">
                  This Month <i className="fa-solid fa-rotate-left" style={{ fontSize: 11 }}></i>
                </div>
              </div>
              <div className="hc-stat-box">
                <div className="hc-main-val">
                  PKR 39.1K
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <path
                      d="M2 18C5 15 8 16 12 12C16 8 20 10 24 6C28 2 32 4 38 2"
                      stroke="#22c55e"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="hc-sub">
                  Avg. saved &nbsp;<span className="em">↑ 21%</span> vs last month
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
                {[
                  { w: 'W1', a: '70%', b: '55%' },
                  { w: 'W2', a: '60%', b: '48%' },
                  { w: 'W3', a: '85%', b: '72%' },
                  { w: 'W4', a: '78%', b: '62%' },
                ].map((x) => (
                  <div key={x.w} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="hc-bars">
                      <div className="hc-bar-grp">
                        <div className="hc-bar a" style={{ height: x.a }}></div>
                        <div className="hc-bar b" style={{ height: x.b }}></div>
                      </div>
                    </div>
                    <div className="hc-bar-label">{x.w}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hc hc-payment float-2" style={{ zIndex: 5 }}>
              <div className="hc-check">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="hc-pay-val">FBR Filed</div>
              <div className="hc-pay-label">On Time · Compliant</div>
            </div>

            <div className="hc hc-tax float-3" style={{ zIndex: 5 }}>
              <div className="hc-head">
                <div className="hc-head-title">Tax Return Filed</div>
                <div className="hc-head-sub">2025-26</div>
              </div>
              <div className="hc-tax-next">
                <div className="hc-tax-label">Refund Amount</div>
                <div className="hc-tax-val">
                  PKR 54,200 <span className="hc-badge">↗ 12%</span>
                </div>
              </div>
              <div className="hc-split">
                <div className="hc-split-col">
                  <div className="hc-split-val">PKR 218K</div>
                  <div className="hc-split-label">Tax Paid</div>
                </div>
                <div className="hc-split-col">
                  <div className="hc-split-val">PKR 272K</div>
                  <div className="hc-split-label">Gross Income</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

