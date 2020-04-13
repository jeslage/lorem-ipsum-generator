import React, { FC } from "react";

import Icon from "../Icon";
import StyledTextarea from "./Textarea.style";

export interface TextareaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onRemove?: () => void;
}

const Textarea: FC<TextareaProps> = ({ label, value, onChange, onRemove }) => {
  return (
    <StyledTextarea>
      {label && <p>{label}</p>}
      <textarea
        rows={10}
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
            <Icon type="remove" />
          </button>
        )}
      </div>
    </StyledTextarea>
  );
};

export default Textarea;
