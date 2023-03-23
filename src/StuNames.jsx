const StuNames = (props) =>{
    return (<ul>
        {
            props.StuNames.map((StuNames) => {
                return <li key = {StuNames}>{StuNames}</li>
            })
        }
        </ul>);
}

export default StuNames;