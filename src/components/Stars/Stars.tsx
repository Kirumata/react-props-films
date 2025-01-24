import Star from '../Star';
import './Stars.css'

function Stars({ count = 0 }) {
    let stars = [];
    if (count > 1 || count < 5) {
        for (let i = 0; i < count; i++) {
            stars.push(<Star key={`star-${i}`} ></Star>);
        }
        return (
            <div>
                <ul className="card-body-stars u-clearfix">
                    {stars}
                </ul>
            </div>
        )
    }
    else{
        return (
            <></>
        )
    }

}

export default Stars
