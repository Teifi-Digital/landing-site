function LayoutRightSide(props) {
  let { selected_key, anchor_items, color } = props;

  return (
    <div className="section-right-side">
      <div className={`section-right-side-container ${color}`}>
        <div className="container-content">
          <ul>
            { anchor_items.map((item, index) => {
              return (
                <li key={`li_arr_anchors_${index}`} className={selected_key === item.anchor ? 'selected' : ''}><a href={`#${item.anchor}`}>{item.label}</a></li>
              );
            })
            }
          </ul>            
        </div>
      </div>
    </div>
  )
}

export default LayoutRightSide;
