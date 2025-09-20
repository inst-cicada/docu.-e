import parseCurl from "parse-curl";

export function extractCurl(curl) {
    console.log("Hey");
    try {
        let parsed = parseCurl(curl);
        if ("body" in parsed) {
            parsed.requestBody = parsed.body;
            delete parsed.body;
        }
        return parsed;
    } catch (err) {
        // console.error("Invalid cURL:", err);
        return null;
    }
}
