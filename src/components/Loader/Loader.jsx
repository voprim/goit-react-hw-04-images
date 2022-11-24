import React, { useState } from "react";
import PropTypes from 'prop-types';
import {ThreeDots} from "react-loader-spinner";

export function Loader() {

  const [hasError, setHasError] = useState(false);


  if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LoaderWrapper">
        <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
}

Loader.propTypes = {
  hasError: PropTypes.bool,
};
