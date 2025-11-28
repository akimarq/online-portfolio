function List(list) {
  return (
    <div className="about-content-bottom-half">
        <p>{list.title}</p>
        <ul>
            <li>• {list.item1}</li>
            <li>• {list.item2}</li>
            <li>• {list.item3}</li>
            <li>• {list.item4}</li>
            <li>• {list.item5}</li>
        </ul>
    </div>
  );
}

export default List;