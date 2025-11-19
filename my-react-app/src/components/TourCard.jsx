// Tham so props
// title: tieu de tour

import Button from "./Button";


// image: hinh anh tour
function TourCard(props) {
    return (<div>
        <img src={props.image} alt={props.title} width={500} />
        <h3 className="font-semibold">{props.title}</h3>
        <div className="flex justify-around">
            <Button label="Xem them"></Button>
            <Button label="Dat tour"></Button>
            {/* <Button /> */}
        </div>
    </div>
    );
}

export default TourCard;