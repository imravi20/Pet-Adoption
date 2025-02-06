import React, { Component } from "react";

export class AdopterData extends Component {
  render() {
    const formData = this.props.getFormData;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Adopter Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.petname}</td>
                  <td>{data.pettype}</td>
                  <td>{data.breed}</td>
                  <td>{data.yname}</td>
                  <td>{data.yemail}</td>
                  <td>{data.yphone}</td>
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
