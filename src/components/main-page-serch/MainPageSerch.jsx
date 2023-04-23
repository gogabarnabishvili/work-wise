import LabelInput from "../label-input/LabelInput";
import SelectOption from "../select-option/SelectOption";
import {
    SerchBoxStyled,
    SerchSelectBoxStyled,
    SerchImgStyled,
} from "./MainPageSerchStyled";
import serchIcon from "../images-icons/search.png";
import filterIcon from "../images-icons/sliders-horizontal.png";
const serchSelect = ["Talant", "Company"];
const Serch = () => {
    return (
        <>
            <SerchBoxStyled>
                <LabelInput type="text" placeholder="Serch " />
                <SerchImgStyled src={filterIcon} />
                <SerchSelectBoxStyled>
                    <SelectOption option={serchSelect} />
                </SerchSelectBoxStyled>
                <SerchImgStyled src={serchIcon} />
            </SerchBoxStyled>
        </>
    );
};
export default Serch;
