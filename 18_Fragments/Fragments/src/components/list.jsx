import ListItem from "./ListItem";
function List ({Items})
{
    // .map is used to convert array data into jsx item
    return (
        <ul className ="list-group">
            {Items.map((item) => 
            (
                <ListItem itemList = {item}></ListItem>
            ))}
        </ul>
    );
};
export default List;