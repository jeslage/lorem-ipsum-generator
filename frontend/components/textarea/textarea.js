import React from "react";
import PropTypes from "prop-types";

import StyledTextarea from "./textarea.style";

const Textarea = ({ label, value, onChange }) => {
  return (
    <StyledTextarea>
      {label && <p>{label}</p>}
      <textarea
        rows="6"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      <span>
        <small>
          {value.length} {value.length === 1 ? "character" : "characters"}
        </small>
      </span>
    </StyledTextarea>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Textarea.defaultProps = {
  label: null
};

export default Textarea;
