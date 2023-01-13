import React, { useState, useEffect } from "react";

const prefix =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "/";

function CityData(props) {
  const [cityCatData, setCityCatData] = useState([]);
  useEffect(() => {
    fetch(`${prefix}/${props.city}/${props.category}`)
      .then((res) => res.json())
      .then((data) => setCityCatData(data))
      .catch((e) => console.log(e));
  }, [cityCatData, props.category, props.city]);
  return (
    <div className="cityData">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {cityCatData.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td>
              <td>
                <a href={data.website}>{data.website ? data.name : "N/A"}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CityData;
