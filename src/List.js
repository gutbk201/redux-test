export default function List(props) {
    const { array } = props;
    return <>{array.map(ele => <div key={ele}>{ele}</div>)}</>
}