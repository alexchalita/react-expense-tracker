import './Card.css'

const Card = (props) => {
    // any className that is used in ExpenseItem on the Card wrapper, will be passes in props 
    const classes ='card ' + props.className;
    // .children is a reserved name
    return <div className={classes}>{props.children}</div>;
}

export default Card;