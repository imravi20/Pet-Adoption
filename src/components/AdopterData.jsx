import React, { Component } from "react";

export class AdopterData extends Component {
  render() {
    const formData = this.props.getFormData;

    return (
      <div>
        <table
          style={{
            borderCollapse: "collapse",
            width: "70%",
            border: "1px solid #ddd",
            fontSize: "18px",
            textAlign: "left",
            padding: "8px",
            backgroundColor: "#f2f2f2",
            color: "#333",
            textTransform: "capitalize",
            fontFamily: "Arial, sans-serif",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Pet Name</th>
              <th style={{ textAlign: "center" }}>Pet Type</th>
              <th style={{ textAlign: "center" }}>Breed</th>
              <th style={{ textAlign: "center" }}>Adopter Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => {
              return (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{data.petname}</td>
                  <td style={{ textAlign: "center" }}>{data.pettype}</td>
                  <td style={{ textAlign: "center" }}>{data.breed}</td>
                  <td style={{ textAlign: "center" }}>{data.yname}</td>
                  <td style={{ textAlign: "center" }}>{data.yemail}</td>
                  <td style={{ textAlign: "center" }}>{data.yphone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={() => {
              this.props.getShow((prev) => !prev);
            }}
            style={{
              padding: "10px 20px",
              boxSizing: "border-box",
              width: "auto",
              display: "inline-block",
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default AdopterData;
