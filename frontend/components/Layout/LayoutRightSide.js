function LayoutRightSide(props) {
  let { selected_key } = props;
  let arr_anchors = [
    {key: 'our-services', text: 'What we do', className: 'black'},
    {key: 'our-achievements', text: 'Problems we solve', className: 'black'},
    {key: 'our-projects', text: 'Who we work with', className: 'white'},
    {key: 'our-values', text: 'Who we are', className: 'black'}
  ];
  let classNameForContainer = arr_anchors.find(item => item.key === selected_key).className
  return (
    <div className="section-right-side">
      <div className={`section-right-side-container ${classNameForContainer}`}>
        <div className="container-content">
          <ul>
            { arr_anchors.map((item, index) => {
              return (
                <li key={`li_arr_anchors_${index}`} className={selected_key === item.key ? 'selected' : ''}><a href={`#${item.key}`}>{item.text}</a></li>
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
