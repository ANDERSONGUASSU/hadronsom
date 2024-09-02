import React from "react";
import PropTypes from "prop-types";

const Specifications = ({ specifications }) => {
  return (
    <>
      <div className="bg-base-200 collapse mb-3 shadow-md shadow-base-300">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-base-100 peer-checked:bg-base-200 peer-checked:text-primary-content">
          <h4 className="text-lg">Especificações</h4>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary-content">
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {specifications.map((spec) => (
              <li key={spec.id} className="block">
                <h5 className="mt-4 font-semibold">{spec.title}:</h5>
                {spec.specification.split("\r\n").map((line, index) => (
                  <p className="ml-4" key={index}>
                    {line}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Specifications.propTypes = {
  specifications: PropTypes.string.isRequired,
};

export default Specifications;
