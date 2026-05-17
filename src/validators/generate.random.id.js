import CommonResponse from "../dto/CommonResponse";

export function generateRandomId(prefix, length, type) {
 
    var prefixStr = "";

    if(prefix && typeof prefix !== "string") {
        prefixStr = "ID";
    } else if (prefix) {
        prefixStr = prefix;
    }

    var randomId = "";

    // Generate random id
    if(type === "NUMBER") {
        randomId = Math.random().toString().substr(2, length);
    } else if (type === "NUMBER_AND_LETTER") {
        randomId = Math.random().toString(36).substr(2, length);
    } else {
        randomId = Math.random().toString(36).substr(2, length);
    }

    var idObject = {
        id: prefixStr + randomId
    };
    return CommonResponse.success(idObject, "Random ID generated successfully", 200);
}