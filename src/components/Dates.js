export default function Dates(props) {
    var timeframe = props.start;
    if (props.end !== props.start) {
        if (props.start) {
            timeframe += " - ";
        }
       timeframe += props.end;
    }
    return timeframe;
}
