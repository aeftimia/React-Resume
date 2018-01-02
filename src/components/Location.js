export default function Location(props) {
    var _location = '';
    if (props === 'Remote') {
        _location = 'Remote';
    } else if (props.region && props.city) {
        _location = props.city + ", " + props.region;
    } else {
        return null;
    }

    return _location;
}
