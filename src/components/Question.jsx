import { Component } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
class Question extends Component {
  render() {
    const { questionIndex: index, onSelect, choices, question } = this.props;
    return (
      <div className="question">
        <div className="question-text">
          {question}
          <span style={{ color: "red" }}> *</span>
        </div>
        <RadioGroup onChange={(e) => onSelect(index, e.target.value)}>
          {choices[index] &&
            choices[index].map((choice, choiceIndex) => (
              <FormControlLabel
                key={choiceIndex}
                value={choice}
                control={<Radio />}
                label={choice}
              />
            ))}
        </RadioGroup>
      </div>
    );
  }
}

export default Question;
