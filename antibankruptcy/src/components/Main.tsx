import React from "react";

function Main() {

    const fields = ["Net Profit", "Total Liabilities/ Total Assets", "Working Capital", "Current Assets", "Cashflow Coverage Ratio", "Retained Earnings" , "EBIT", "Book Value of Equity", "Sales", "Equity"]
  return (
    <>
      <div className="container m-5">
        <div className="display-5">Bankrupcty Detection Model</div>
        <hr />
        <p>Are you worried about the financial health of your business or investments?<br /><br /> PredictRight is your trusted partner in making informed decisions about bankruptcy risk. Our cutting-edge bankruptcy prediction application leverages the power of data analytics and machine learning to help you anticipate financial distress before it becomes a crisis.</p>
        <div className="info"></div>
        <div className="form border p-5">
          <form className="w-100">
            <div className="gap-5 d-flex justify-content-start flex-wrap">
            {fields.map((field, index)=>(
                <div className="mb-3 w-25" key={index}>
                <label className="form-label">{field}</label>
                <input
                  type="number"
                  className="form-control"
                  id={field}
                  aria-describedby={field}
                />
              </div>
            ))}
            </div>
            <button type="submit" className="btn btn-primary">
              Test Bankruptcy
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
