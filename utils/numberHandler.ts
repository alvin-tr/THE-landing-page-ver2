import { string } from "yup"

class NumberHandler {
    getDecimals = function (value: number | string): number {
        if (isNaN(Number(value))) throw new Error("need a number")
        return String(value).split(".")[1]?.length
    }




}
export default new NumberHandler()