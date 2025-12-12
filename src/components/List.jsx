function List(list) {
  return (
    <div className="about-content-desc">
        <p className="alt-text">{list.title}</p>
        <p>- {list.item}</p>
    </div>
  );
}

export default List;