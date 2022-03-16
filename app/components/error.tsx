type ErrorProps = {
    error: "timeout" | "internal";
}

export default function Error({ error }: ErrorProps) {
    let reply = "";
    if(error === "timeout") {
        reply = "I am sorry, unfortunately the weather service is not available at the moment.";
    } else {
        reply = "I am sorry, something went wrong. Please try again in a few seconds.";
    }
    return <s>{reply}</s>
}