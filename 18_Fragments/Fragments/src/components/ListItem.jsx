import style from './ListItems.module.css'

function ListItem ({itemList})
{
    return (
        <li className={`${style.btns} list-group-item`}>{itemList}</li>
    );
};

export default ListItem;