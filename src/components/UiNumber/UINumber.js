import numeral from "numeral";
import { LikeAndCommentsQuantity } from "./UINumberStyle";

const UINumber = ({format, children}) => {
    return (
        <LikeAndCommentsQuantity>
            {numeral(children).format(format)}
        </LikeAndCommentsQuantity>
    )
}

export default UINumber;