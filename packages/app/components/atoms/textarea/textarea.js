import React from "react";
import PropTypes from "prop-types";

import StyledTextarea from "./textarea.style";
import SvgSprite from "@atoms/SvgSprite";

import RemoveIcon from "../../icons/remove.svg";

const Textarea = ({ label, value, onChange, onRemove }) => {
  return (
    <StyledTextarea>
      {label && <p>{label}</p>}
      <textarea
        rows="10"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      <div className="textarea__meta">
        <span className="textarea__characters">
          <small>
            {value.length} {value.length === 1 ? "character" : "characters"}
          </small>
        </span>
        {onRemove && (
          <button onClick={() => onRemove()}>
            <SvgSprite icon={RemoveIcon} />
          </button>
        )}
      </div>
    </StyledTextarea>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func
};

Textarea.defaultProps = {
  label: null,
  onRemove: undefined
};

export default Textarea;
