export default function CardMain(props) {
    return (   
        
    <div className="col">
        <img src={props.thumb} alt="" />
        <p> {props.series} </p>
    </div>
    );
}