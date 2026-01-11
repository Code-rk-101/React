function Display_tab({displayValue})
{
    return (
        <div className="calc_display">
            <input id="display_tab" type="text" readOnly placeholder="0"
            value={displayValue} />
        </div>
    );
};

export default Display_tab;