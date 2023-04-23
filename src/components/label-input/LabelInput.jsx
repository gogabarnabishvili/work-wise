import { LabelStyled, InputStyled } from "./LabelInputStyled";

const LabelInput = (props) => {
    return (
        <LabelStyled name={props.name}>
            {props.text}
            <InputStyled
                type={props.type}
                name={props.name}
                value={props.value}
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.onChange}
            ></InputStyled>
        </LabelStyled>
    );
};
export default LabelInput;
