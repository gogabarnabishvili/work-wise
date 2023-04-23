import { SelectStyled, OptionStyled } from "./SelectOptionStyled";

const SelectOption = (props) => {
    return (
        <SelectStyled>
            {props.option.map((e, index) => (
                <OptionStyled value={e.value} key={index}>
                    {e}
                </OptionStyled>
            ))}
        </SelectStyled>
    );
};
export default SelectOption;
